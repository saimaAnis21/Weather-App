let contentdiv = document.getElementById("content");

let city = "sydney";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=54c6bcf0d3d2d963d92771c4eeb2136f`;

fetch(url, {
    method: 'GET'
    
})
.then(response => response.json())
.then(data =>{ 
    console.log(data);
 })
