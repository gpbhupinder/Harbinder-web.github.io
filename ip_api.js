$(document).ready(function() {

  getLocationF();
  
  
  $(".f-degrees").addClass("btn-select").removeClass("hacker-text");
  
 

  function getLocationF() {
    $.getJSON("https://api.ipgeolocation.io/ipgeo", function(ip) {
      console.log(ip);
      $("#ip-address").html("IP: " + ip.ip + " " + ip.org + " " + ip.asn);
      $("#hostname").html(ip.calling_code);
      $("#location-data").html(ip.latitude + "," + ip.longitude + " " + ip.city + ", " + ip.region + " " + ip.postal + " " + ip.country_name);
      
    getWeatherF(ip.postal);  
    }, 'jsonp');

  }
  

  function getWeatherF(zip) {

    $.get("https://api.wunderground.com/api/748bf5540d91162d/conditions/q/" + zip + ".json", function(weatherF) {

      console.log(weatherF);

      $("#weather").html(weatherF.current_observation.weather);
      $("#temp").html(weatherF.current_observation.temp_f + " F&deg;");
      $("#weather-icon").html('<img src=' + weatherF.current_observation.icon_url + '>');
      $("#feels-like").html(weatherF.current_observation.feelslike_f + " F&deg;");
      $("#wind").html(weatherF.current_observation.wind_dir + " " + weatherF.current_observation.wind_mph + " MPH");
      $("#gust").html(weatherF.current_observation.wind_gust_mph + " MPH");
      $("#humidity").html(weatherF.current_observation.relative_humidity);
      $("#dew-point").html(weatherF.current_observation.dewpoint_f + " F&deg;");
    });

  }
  
  function getLocationC() {
 $.getJSON("https://ipapi.co/json/", function(ip) {
      console.log(ip);
      $("#ip-address").html("IP: " + ip.ip + " " + ip.org + " " + ip.asn);
      $("#location-data").html(ip.latitude + "," + ip.longitude + " " + ip.city + ", " + ip.region + " " + ip.postal + " " + ip.country_name);
      
    getWeatherC(ip.postal);  
    }, 'jsonp');

  }
  
  function getWeatherC(zip){
    
     $.get("https://api.wunderground.com/api/748bf5540d91162d/conditions/q/" + zip + ".json", function(weatherC) {

console.log(weatherC);

       $("#weather").html(weatherC.current_observation.weather);
      $("#temp").html(weatherC.current_observation.temp_c + " C&deg;");
      $("#weather-icon").html('<img src=' + weatherC.current_observation.icon_url + '>');
      $("#feels-like").html(weatherC.current_observation.feelslike_c + " C&deg;");
      $("#wind").html(weatherC.current_observation.wind_dir + " " + weatherC.current_observation.wind_kph + " KPH");
      $("#gust").html(weatherC.current_observation.wind_gust_kph + " KPH");
      $("#humidity").html(weatherC.current_observation.relative_humidity);
      $("#dew-point").html(weatherC.current_observation.dewpoint_c + " C&deg;");
     
    });
    
  }
  
  $(".c-degrees").on("click", function(){
   $(".c-degrees").addClass("btn-select").removeClass("hacker-text");
    $(".f-degrees").addClass("hacker-text").removeClass("btn-select");
    
    //change weather
 
    getLocationC();
  
    //end change weather
    
    $(".f-degrees").on("click", function(){
   $(".f-degrees").addClass("btn-select").removeClass("hacker-text");
    $(".c-degrees").addClass("hacker-text").removeClass("btn-select");
    
      //change weather
      getLocationF();
      //end change weather
    });
    
  });

});