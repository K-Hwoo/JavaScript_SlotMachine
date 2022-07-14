const API_KEY = "4d35b8febb79faed1678eb2a95683cd5";

function Geo_OK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    //console.log("you live in", lat, lng); // 화면에 띄우기로 바꿔보기
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(URL);

    // API 구문
    fetch(URL).then((response) => response.json()).then((data) => {
        console.log(data.name, data.weather[0].main);

        const show_city = document.querySelector("#weather span:first-child");
        const show_weather = document.querySelector("#weather span:last-child");
        const city = data.name;
        const weather = data.weather[0].main
        const temp = Math.round(data.main.temp)

        show_city.innerText = city;
        show_weather.innerText =  `${weather} / ${temp}'C`;
    });
}
function Geo_err() {
    alert("Can't find you. No weather for you.") // 화면에 띄우기로 바꿔보기
}

navigator.geolocation.getCurrentPosition(Geo_OK, Geo_err);