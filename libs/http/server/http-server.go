package http_server

import (
	"fmt"
	"net/http"
)

func Server(port int) *http.Server {
	t := ":%d"

	return &http.Server{
		Addr: fmt.Sprintf(t, port),
	}
}
