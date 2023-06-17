// Comunicar entre threads
package main

import "fmt"

// T1
func main() {
	channel := make(chan string)

	// T2
	go func ()  {
		channel <- "Olá, vindo da T2"
	}()

	fmt.Println(<-channel)
}
