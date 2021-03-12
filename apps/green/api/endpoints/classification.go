package endpoints

import (
  "fmt"
  "net/http"
  "strings"

  "github.com/finebee/seedx/libs/http/server"
  "github.com/gin-gonic/gin"
)

type classification struct {
  base string
}

func Classification(base string) server.Endpoint {
  return &classification{
    base: base,
  }
}

func (impl *classification) Build() http.Handler {
  handler := gin.Default()
  handler.POST("", impl.events)
  handler.POST("", impl.register)
  return handler
}

func (impl *classification) events(c *gin.Context) {
  c.JSON(http.StatusOK, nil)
}

func (impl *classification) register(c *gin.Context) {
  c.JSON(http.StatusCreated, nil)
}

func (impl *classification) pattern(pattern string) string {
  t := "%s/%s"
  pattern = fmt.Sprintf(t, impl.base, pattern)
  return strings.ReplaceAll(pattern, "//", "/")
}
