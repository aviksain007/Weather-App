let arr = ["New Delhi", "Mumbai", "Hyderabad", "Kolkata", "Bengaluru"]

let displayWeatherOtherCities = (data, city) => {
    document.getElementById(`${city}Temp`).innerHTML = `${data.current.temp_c}°C`
    document.getElementById(`${city}FeelsLike`).innerHTML = `${data.current.feelslike_c}°C`
    document.getElementById(`${city}Humidity`).innerHTML = `${data.current.humidity}%`
    document.getElementById(`${city}Pressure`).innerHTML = `${data.current.pressure_mb}mbar`
    document.getElementById(`${city}WindSpeed`).innerHTML = `${data.current.wind_kph}km/h`
}

function findWeather(city) {
    let apiKey = "4ed928b9a51e4d8ea8350149230104"
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
        .then((response) => {
            return response.json()
        }).then((value) => {
            console.log(value)
            displayWeatherOtherCities(value, city)
        }).catch((err) => {
            console.log(err)
        })
}



for (let city of arr) {
    findWeather(city)
}
