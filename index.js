var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" ;
var apiKEY = "&appid=a3a5c7e29808e16a7d59992c7d326346";
var dataUnits = "&units=metric"

async function getWeather(cityName){
    var response = await fetch (apiURL + cityName + apiKEY + dataUnits);
    var data = await response.json();

    console.log(data)

    if (data.cod == 404){
        document.querySelector('.error-text').style.display = "block";
    }
    else if (data.cod == 200){

        var temperature = data.main.temp;
        var humidity = data.main.humidity;
        var windSpeed = data.wind.speed;
        var weather = data.weather[0].main;

        document.querySelector('.weather-details h1').innerHTML = (Math.round(temperature) + '°c');
        document.querySelector('.weather-details h2').innerHTML = cityName;
        document.querySelector('.humidity div h3').innerHTML = humidity + '%';
        document.querySelector('.wind-speed div h3').innerHTML = windSpeed + ' km/h';

        if (weather === 'Clear'){
            document.querySelector('#weather-icon').src = 'images/clear.png';
        }
        else if (weather == 'Clouds'){
            document.querySelector('#weather-icon').src = 'images/clouds.png';
        }
        else if (weather === 'Drizzle'){
            document.querySelector('#weather-icon').src = 'images/drizzle.png';
        }
        else if (weather === 'Humidity'){
            document.querySelector('#weather-icon').src = 'images/humidity.png';
        }
        else if (weather === 'Mist'){
            document.querySelector('#weather-icon').src = 'images/mist.png';
        }
        else if (weather === 'Rain'){
            document.querySelector('#weather-icon').src = 'images/rain.png';
        }
        else if (weather === 'Snow'){
            document.querySelector('#weather-icon').src = '/images/snow.png';
        }
        document.querySelector('.error-text').style.display = "none";
        document.querySelector('.city-weather').style.display = "block"; 
    }
}

document.querySelector('.search button').addEventListener('click', function(){
    var value = document.querySelector('.search input').value
    getWeather(value);
})

document.querySelector('.search input').addEventListener('keypress', function(e){
    if (e.key == 'Enter'){
        var value = document.querySelector('.search input').value
        getWeather(value);
    }
})
