const input = document.querySelector("input");
const btn = document.querySelector('#btn');
const icon = document.querySelector('.icon');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');

btn.addEventListener("click",()=>{
    let city = input.value;
    // console.log(input.value);
    getWeather(city);
})

function getWeather(city){
    console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'06879b7479e8a786dd06606735d3c68f'}`)
    .then(Response=>Response.json())
    .then(data =>{
        console.log(data);

        // icon code
        const iconCode = data.weather[0].icon;
        icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="weather icon"/>`;

        //weather city code
        const weatherCity = data.name;
        const weatherCountry = data.sys.country;
        weather.innerHTML =`${weatherCity}, ${weatherCountry}`;


        //temp
        let weatherTemp = data.main.temp;
        weatherTemp = weatherTemp - 273;
        const temp= weatherTemp.toFixed(2)
        temperature.innerHTML= `${temp}°C`;

        const weatherdec = data.weather[0].description;
        description.innerHTML= weatherdec;

    });

};
