// SERVICES
weatherApp.service('cityService', function(){
  this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
  
  this.GetWeather = function(city, days) {
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });
  
    return weatherAPI.get({ q: city, cnt: days, appid: "44db6a862fba0b067b1930da0d769e98" });  
  };
  
}]);