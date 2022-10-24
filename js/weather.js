const API_KEY = "bcd18cafcbf9e4838a2d9efe5c5e441c";


function onGeoOk (position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in" , lat , lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    // url.normalizeurl.
}

function onGeoError (){
    alert("Can't find you. No Weather for you");

}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);