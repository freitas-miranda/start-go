// Basics
package main

import (
	"fmt"
	"net/http"
)

type Course struct {
	Name string
	Description string
	Price int
}

// Adicionar comportamento às structs
func (c Course) GetFullInfo() string {
	return fmt.Sprintf("Name: %s, Description: %s, Price: %d", c.Name, c.Description, c.Price)
}

func soma (x int, y int) (int, bool) {
	if x > 10 {
		return x + y, true
	}
	return x + y, false
}

func main() {
	a := "Hello, World"
	fmt.Println(a)


	resultado, status := soma(10 ,-9)
	println(resultado, status)


	// Usar structs
	course := Course{
		Name: "Golang",
		Description: "Golang course",
		Price: 100,
	}

	fmt.Println(course.GetFullInfo())
	

	// Subir um servidor HTTP
	http.HandleFunc("/", home)
	// http.ListenAndServe(":8080", nil)
}

func home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Olá API"))
}
