function hide() {
    errorNav.hidden = true
}

let displayWeather = (data) => {
    place.innerHTML = `Weather in ${data.location.name}`
    region.innerHTML = `${data.location.region}, ${data.location.country}`
    icon.innerHTML = `<img height="150vh" src="${data.current.condition.icon}" alt="Logo"></img>`
    condition.innerHTML = `${data.current.condition.text}`
    main_temp.innerHTML = `${data.current.temp_c}°C`
    feels_like.innerHTML = `${data.current.feelslike_c}°C<br>Feels like`
    minTemp.innerHTML = `${data.forecast.forecastday[0].day.mintemp_c}°C<br>Min Temp`
    maxTemp.innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}°C<br>Max Temp`
    humidity.innerHTML = `${data.current.humidity}%<br>Humidity`
    pressure.innerHTML = `${data.current.pressure_mb} mbar<br>Pressure`
    windSpeed.innerHTML = `${data.current.wind_kph} km/h<br>Wind Speed`
    sunRise.innerHTML = `${data.forecast.forecastday[0].astro.sunrise}<br>Sun Rise`
    sunSet.innerHTML = `${data.forecast.forecastday[0].astro.sunset}<br>Sun Set`
}

let displayForeCast = (data) => {
    temp00.innerHTML = `${data.forecast.forecastday[0].hour[0].temp_c}°C<br>${data.forecast.forecastday[0].hour[0].condition.text}`
    temp02.innerHTML = `${data.forecast.forecastday[0].hour[2].temp_c}°C<br>${data.forecast.forecastday[0].hour[0].condition.text}`
    temp04.innerHTML = `${data.forecast.forecastday[0].hour[4].temp_c}°C<br>${data.forecast.forecastday[0].hour[0].condition.text}`
    temp06.innerHTML = `${data.forecast.forecastday[0].hour[6].temp_c}°C<br>${data.forecast.forecastday[0].hour[0].condition.text}`
    temp08.innerHTML = `${data.forecast.forecastday[0].hour[8].temp_c}°C<br>${data.forecast.forecastday[0].hour[0].condition.text}`
    temp10.innerHTML = `${data.forecast.forecastday[0].hour[10].temp_c}°C<br>${data.forecast.forecastday[0].hour[0].condition.text}`
    temp12.innerHTML = `${data.forecast.forecastday[0].hour[12].temp_c}°C<br>${data.forecast.forecastday[0].hour[0].condition.text}`
    temp14.innerHTML = `${data.forecast.forecastday[0].hour[14].temp_c}°C<br>${data.forecast.forecastday[0].hour[0].condition.text}`
    temp16.innerHTML = `${data.forecast.forecastday[0].hour[16].temp_c}°C<br>${data.forecast.forecastday[0].hour[0].condition.text}`
    temp18.innerHTML = `${data.forecast.forecastday[0].hour[18].temp_c}°C<br>${data.forecast.forecastday[0].hour[0].condition.text}`
    temp20.innerHTML = `${data.forecast.forecastday[0].hour[20].temp_c}°C<br>${data.forecast.forecastday[0].hour[0].condition.text}`
    temp22.innerHTML = `${data.forecast.forecastday[0].hour[22].temp_c}°C<br>${data.forecast.forecastday[0].hour[0].condition.text}`
}

let displayForeCastByDay = (data) => {
    day1.innerHTML = `${data.forecast.forecastday[1].date}`
    day2.innerHTML = `${data.forecast.forecastday[2].date}`
    // day3.innerHTML = `${data.forecast.forecastday[3].date}`
    // day4.innerHTML = `${data.forecast.forecastday[4].date}`
    // day5.innerHTML = `${data.forecast.forecastday[5].date}`
    // day6.innerHTML = `${data.forecast.forecastday[6].date}`
    // day7.innerHTML = `${data.forecast.forecastday[7].date}`

    tempday1.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_c}°C/${data.forecast.forecastday[1].day.mintemp_c}°C<br>${data.forecast.forecastday[1].hour[0].condition.text}`
    tempday2.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_c}°C/${data.forecast.forecastday[2].day.mintemp_c}°C<br>${data.forecast.forecastday[2].hour[0].condition.text}`
    // tempday3.innerHTML = `${data.forecast.forecastday[3].day.avgtemp_c}°C<br>${data.forecast.forecastday[3].hour[0].condition.text}`
    //     tempday4.innerHTML = `${data.forecast.forecastday[4].day.avgtemp_c}°C<br>${data.forecast.forecastday[4].hour[0].condition.text}`
    //     tempday5.innerHTML = `${data.forecast.forecastday[5].day.avgtemp_c}°C<br>${data.forecast.forecastday[5].hour[0].condition.text}`
    //     tempday6.innerHTML = `${data.forecast.forecastday[6].day.avgtemp_c}°C<br>${data.forecast.forecastday[6].hour[0].condition.text}`
    //     tempday7.innerHTML = `${data.forecast.forecastday[7].day.avgtemp_c}°C<br>${data.forecast.forecastday[7].hour[0].condition.text}`
    // 
}

let weather = {
    apiKey: "4ed928b9a51e4d8ea8350149230104",
    fetchWeather: function(city) {
        errorNav.hidden = true
        event.preventDefault();
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=10&aqi=no&alerts=no`)
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data)
                displayWeather(data)
                displayForeCast(data)
                displayForeCastByDay(data)
            }).catch((error) => {
                errorNav.hidden = false
                errorNav.innerHTML = `No city has found with ${city} name
                            <div style="float: right; margin: -6px;">
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="hide()" ></button></div>`
            })
    },
}

// weather.fetchWeather("tarakeswar")
