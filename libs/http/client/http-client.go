package client

import (
	"crypto/tls"
	"net/http"
	"net/http/cookiejar"
	"time"
)

func Client(seconds int) *http.Client {
	cookieJar, _ := cookiejar.New(nil)
	timeout := time.Duration(seconds) * time.Second

	return &http.Client{
		Timeout: timeout,
		Jar:     cookieJar,
		Transport: &http.Transport{
			TLSClientConfig: &tls.Config{
				InsecureSkipVerify: true,
			},
		},
	}
}
