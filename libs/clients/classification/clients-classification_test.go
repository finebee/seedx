package clients_classification

import (
	"testing"
)

func TestClientsClassification(t *testing.T) {
	result := ClientsClassification("works")
	if result != "ClientsClassification works" {
		t.Error("Expected ClientsClassification to append 'works'")
	}
}
