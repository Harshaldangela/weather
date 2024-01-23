let weather={
    apikey:"e26757b7e941f31b063e057c9017fdee",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.dataweather(data));
    },
    dataweather: function(data){
        var{name}=data;
        var {description}=data.weather[0];
        var {temp,humidity}=data.main;
        var {speed}=data.wind;
        document.querySelector(".city").innerText = name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity :"+ humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed : "+ speed + "km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-in").value);
    },
    
}
document.querySelector(".search-in").addEventListener("click",function(){
    weather.search()
})
document.querySelector(".search-in").addEventListener("keyup",function(e){
    if(e.key=="Enter"){
    weather.search()
    }
})