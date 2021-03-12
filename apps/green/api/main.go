package main

import (
	"log"

	"github.com/finebee/seedx/apps/green/api/endpoints"
	"github.com/finebee/seedx/libs/http/server"
)

func main() {
	classificationApi := endpoints.
		Classification("/api/classification")

	log.Fatal(server.New(5000, classificationApi).ListenAndServe())
}
