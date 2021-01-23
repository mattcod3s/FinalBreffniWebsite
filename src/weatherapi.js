
const bookingButton = document.getElementById('booking-button');
let apiWrapper = document.getElementById('api-wrapper');

bookingButton.addEventListener('click',  () => {
    let lat = 34.052235;
    let long = -118.2436834;

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/e4d88e9928e57d49d1dd1c799043d598/${lat},${long}`;

    fetch(api)
        .then( (response) => {
            return response.json();
        })
        .then((data) => {
            
            const { timezone }  = data;
            const {temperature, summary} = data.currently;
            console.log(data, summary);
            
            if(summary.includes("Cloudy") || summary.includes("Overcast")) {
                apiWrapper.classList.remove("clear");
                apiWrapper.classList.remove("rainy");
                apiWrapper.classList.add("cloudy");
            } else if(summary.includes("Rain") || summary.includes("Drizzle")) {
                apiWrapper.classList.remove("clear");
                apiWrapper.classList.remove("cloudy");
                apiWrapper.classList.add("rainy");
            } else if(summary.includes("Clear")) {
                apiWrapper.classList.remove("cloudy");
                apiWrapper.classList.remove("rainy");
                apiWrapper.classList.add("clear");
            } else {
                apiWrapper.classList.remove("cloudy");
                apiWrapper.classList.remove("rainy");
                apiWrapper.classList.add("clear");
            }
            
    });
})

    

