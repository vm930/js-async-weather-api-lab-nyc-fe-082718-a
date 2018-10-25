const API_KEY = "&APPID=9fa0a7d618174f21ed1d5f18e6be2208"
//const city = "New York"
let url = "https://api.openweathermap.org/data/2.5/weather?"
let url5 = "https://api.openweathermap.org/data/2.5/forecast?"
let fetchUrl = `${url}=${city}&&APPID=${API_KEY}`
let fetchUrl5 = `${url5}=${city}&&APPID=${API_KEY}`

function handleFormSubmit(event) {
  //handle submit event
  event.preventDefalut()
  const city = document.querySelector(".city").value
  
  fetch(fetchUrl) //{API_KEY}
  .then(response => response.json())
  .then(joson =>console.log(json))
}
/*
function fetchCurrentWeather(city) {
  //fetch current weather based on city
  fetch(fetchUrl) //{API_KEY}
  .then(response => response.json())
  .then(joson =>console.log(json))
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  
  
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  fetch(fetchUrl5)
  .then(response => response.json())
  .then(json => console.log(json))
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', () => {
  //add event listener here for form submission
  const submitButton = domcument.querySelector("submitButton")
  submitButton.addEventListener("click", handleFormSubmit)
})
*/