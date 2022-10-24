const API_KEY = "bcd18cafcbf9e4838a2d9efe5c5e441c";


function onGeoOk (position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in" , lat , lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    console.log(url);
}

function onGeoError (){
    alert("Can't find you. No Weather for you");

}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);