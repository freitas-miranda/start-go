// Comunicar entre threads com workers
package main

import (
	"fmt"
	"time"
)


func worker(workerId int, data chan int)  {
	for x := range data {
		fmt.Printf("Worker %d received %d\n", workerId, x)
		time.Sleep(time.Second)
	}
}

// T1
func main() {
	channel := make(chan int)
	
	for i := 1; i <= 3; i++ {
		go worker(i, channel) // Ti -> 2k mem
	}		
	
	for i := 1; i <= 10; i++ {
		channel <- i
	}	
}
