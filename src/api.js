document.getElementById('reserve-button').addEventListener('click', function() {
    document.getElementById('reserved-layer').style.display = 'flex';
    document.getElementById('reserved-layer').style.position = 'absolute';
    document.getElementById('reserved-layer').style.pointerEvents = 'auto';
    document.getElementById('reserve-button').style.visibility = 'hidden';
    gsap.to(layer, {opacity: 1, y: -30, duration: 0.5});

    let lat = 34.052235;
    let long = -118.2436834;

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/e4d88e9928e57d49d1dd1c799043d598/${lat},${long}`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const { timezone }  = data;
            const {temperature, summary} = data.currently;
            document.getElementById('weather-temperature').textContent = temperature + '°F';
            document.getElementById('weather-location').textContent = timezone;
            document.getElementById('weather-description').textContent = summary;

            if(summary.includes("Cloudy") || summary.includes("Overcast")) {
                document.getElementById('weather-box').style.backgroundImage = "url('img/weather-box-clouds.gif')";
                document.getElementById('weather-box').style.backgroundSize = "cover";
            } else if(summary.includes("Rain") || summary.includes("Drizzle")) {
                document.getElementById('weather-box').style.backgroundImage = "url('img/rain.gif')";
            } else if(summary.includes("Clear")) {
                document.getElementById('weather-box').style.backgroundImage = "url('img/weather-box-clear.gif')";
            } else if(summary.includes("Humid")) {
                document.getElementById('weather-box').style.backgroundImage = "url('img/weather-box-humid.gif')";
            }
        });
});