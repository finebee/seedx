package server

import (
  "fmt"
  "net/http"
)

type Endpoint interface {
  Build() http.Handler
}

func New(port int, e Endpoint) *http.Server {
  t := ":%d"

  return &http.Server{
    Handler: e.Build(),
    Addr:    fmt.Sprintf(t, port),
  }
}
