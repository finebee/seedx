package endpoints

import (
	"fmt"
	"net/http"
	"strings"
	"time"

	clc "github.com/finebee/seedx/libs/clients/classification"
	"github.com/finebee/seedx/libs/http/server"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

var (
	wsupgrader = websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
		CheckOrigin:     func(r *http.Request) bool { return true },
	}
)

type classification struct {
	base    string
	clients []*websocket.Conn
	feed    []*clc.Classification
}

func Classification(base string) server.Endpoint {
	return &classification{
		base:    base,
		feed:    clc.Get(),
		clients: []*websocket.Conn{},
	}
}

func (impl *classification) disptach() {
	if len(impl.clients) <= 0 {
		return
	}

	impl.feed = clc.Get(impl.feed...)

	for _, client := range impl.clients {
		_ = client.WriteJSON(impl.feed)
	}
}

func (impl *classification) Build() http.Handler {
	go func() {
		tikcer := time.NewTicker(time.Second * 10)
		defer tikcer.Stop()

		for range tikcer.C {
			impl.disptach()
		}
	}()

	handler := gin.Default()
	handler.GET(impl.pattern("/ws"), impl.events)
	return handler
}

func (impl *classification) events(c *gin.Context) {
	conn, err := wsupgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		return
	}

	impl.clients = append(impl.clients, conn)
}

func (impl *classification) pattern(pattern string) string {
	t := "%s/%s"
	pattern = fmt.Sprintf(t, impl.base, pattern)
	return strings.ReplaceAll(pattern, "//", "/")
}
