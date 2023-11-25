var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description'); // Corrected variable name
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "a23e78143899911b62cb2b4fd742bc36"

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function()
 {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=${apik}`)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descripVal = data['weather'][0]['description']; // Corrected variable name
            var tempature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descripVal}</span>`;
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;
        })
        .catch(err => alert('You entered the wrong city name'));
});
