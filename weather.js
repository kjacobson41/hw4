let geoCheck = function(event) {
  navigator.geolocation.getCurrentPosition(getWeather);
}

jQuery('#get_forecast').on('click',geoCheck)

let getWeather = function(info) {
  let latitude = info.coords.latitude.toFixed(4);
  let longitude = info.coords.longitude.toFixed(4);
  let apiKey = 'a73dc7790533e5fe3c02bf43bf5d65f5';

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

let updateWidget = function(data) {

  let tempNow = data.main.temp.toFixed(0)
  let icon = data.weather["0"].icon
  let city = data.name

  jQuery('.card-text-2').text("It is " + tempNow + " degrees outside.")
  jQuery('.card-title-2').text(city)
  jQuery('#weather > img').attr("src", "http://openweathermap.org/img/w/" + icon + ".png")

}

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
