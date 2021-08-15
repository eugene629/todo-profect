const weather = document.querySelector("#weather")
const city = document.querySelector("#city")

const api_KEY = "2d93dd15c2bb96311b26a168f80831f1";
const COORDS = "coords"
let isTempData = true;

function getWeather(){
    console.log("here")
    const coords = localStorage.getItem(COORDS);

    const lat = JSON.parse(coords).latitude;
    const lon = JSON.parse(coords).longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_KEY}&units=metric`
    
    fetch(url)
        .then((Response)=> Response.json())
        .then((data)=>{
            const tempData = data.main.temp;
            const weatherData = data.weather[0].main;
            const cityData = data.name;
            
            if(isTempData === true){
                weather.innerText = `${tempData}°C`
                isTempData = false;
                
            }else if(isTempData===false){
                weather.innerText = `${weatherData}`
                isTempData = true
            }
            city.innerText=`in ${cityData}`
        })
}
    

function onGeopositionSucces(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    localStorage.setItem(COORDS, JSON.stringify({
        latitude : lat,
        longitude : lon
    }))

    getWeather();
}

function onGeopositionError(){
    alert("위치 정보를 받아오지 못했습니다.")
}


if(localStorage.getItem(COORDS) !== null){
    setInterval(getWeather, 2000)    
}else {
    
    navigator.geolocation.getCurrentPosition(onGeopositionSucces,onGeopositionError)
}