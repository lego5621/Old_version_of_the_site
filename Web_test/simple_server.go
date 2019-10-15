package main //обьяляю исполняемым файлом
 
import (//загружаю пакеты
"fmt" 
"net/http"
)
 
func main() {  //функция входа в программу
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) { //путь, функция пинимающая заголовки http ответа/запроса
		fmt.Fprintf(w, "Hello World!") //вывод сообщеиня
	})

	fmt.Println("Server is listening...")//перед запуском вывожу в консоль

	http.ListenAndServe(":8080", nil)// функция прослушивающаяя tsp порт 8088

}