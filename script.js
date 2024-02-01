const apiKey = "1136aa705b741ebf3a40ce49092bd658"
const apiLink = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let cityName = document.querySelector(".cityname");
let temperature = document.querySelector(".temperature");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

const image = document.querySelector(".wetherimg");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function weather(nameofcity){
    const response = await fetch(apiLink + nameofcity + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".main").style.display = 'none';
    }
    else{

    var data = await response.json(); 

    console.log (data);

    cityName.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + '°C';
    humidity.innerHTML = data.main.humidity + '%';
    wind.innerHTML = data.wind.speed + ' km/hr';

    if(data.weather[0].main == 'Clouds'){
        image.src = "images/clouds.png";
    }
    else if(data.weather[0].main == 'Haze'){
        image.src = "images/clouds.png";
    }
    else if(data.weather[0].main == 'Clear'){
        image.src = "images/clear.png";
    }
    else if(data.weather[0].main == 'Rain'){
        image.src = "images/rain.png";
    }
    else if(data.weather[0].main == 'Mist'){
        image.src = "images/mist.png";
    }
    else if(data.weather[0].main == 'Snow'){
        image.src = "images/snow.png";
    }
    document.querySelector(".main").style.display = 'block';
    document.querySelector(".error").style.display = 'none';
        
    }


}
searchBtn.addEventListener("click", ()=>{
    weather(searchBox.value);
    if(searchBox.value == ""){
        alert("Please Enter the City!");
    }
    searchBox.value='';
})