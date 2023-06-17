// Go routines
package main

import (
	"fmt"
	"time"
)

func counter(processo string) {
	for i := 1; i <= 5; i++ {
		fmt.Println(processo, i)
		time.Sleep(time.Second)
	}
}

func main() {
	go counter("P1")
	go counter("P2")
	counter("P3")
}
