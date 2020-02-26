const getLocation = document.getElementById('btn');
const degreeSection = document.getElementById('deg');
const detailSection = document.getElementById('detail');
// const imageSection=document.getElementById('condition');
const containerSection = document.getElementById('container');
getLocation.onclick = async function() {
  const cityname = document.getElementById('city').value;

  // this variable holds the URL we want to fetch
  const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=3c957273a2ed56f3d47075b46e50a3fd`;
  const response = await fetch(url);
  const weatherData = await response.json();
console.log(cityname);
console.log(weatherData.name);

  if (cityname.toLowerCase() == weatherData.name.toLowerCase()) {
    degreeSection.innerText =
     cityname + ' ' + weatherData.wind.deg + ' ' + 'degrees outside';
    detailSection.innerText = weatherData.weather[0].main;
    if (detailSection.innerText === 'Haze') {
      containerSection.style.backgroundImage = 'url(./assets/hazy.gif)';
    } else if (detailSection.innerText === 'Clouds') {
      containerSection.style.backgroundImage = 'url(./assets/cloudy.gif)';
    } else if (detailSection.innerText === 'Rain') {
      containerSection.style.backgroundImage = 'url(./assets/rainy.gif)';
    } else if (detailSection.innerText === 'Thunderstorm') {
      containerSection.style.backgroundImage = 'url(./assets/thunderstorm.gif)';
    } else if (detailSection.innerText === 'Drizzle') {
      containerSection.style.backgroundImage = 'url(./assets/drizzle.gif)';
    } else if (detailSection.innerText === 'Snow') {
      containerSection.style.backgroundImage = 'url(./assets/snow.gif)';
    } else if (detailSection.innerText === 'Mist') {
      containerSection.style.backgroundImage = 'url(./assets/mist.gif)';
    } else if (detailSection.innerText === 'Smoke') {
      containerSection.style.backgroundImage = 'url(./assets/smoke.gif)';
    } else if (detailSection.innerText === 'Dust') {
      containerSection.style.backgroundImage = 'url(./assets/dust.gif)';
    } else if (detailSection.innerText === 'Fog') {
      containerSection.style.backgroundImage = 'url(./assets/fog.gif)';
    } else if (detailSection.innerText === 'Sand') {
      containerSection.style.backgroundImage = 'url(./assets/sand.gif)';
    } else if (detailSection.innerText === 'Ash') {
      containerSection.style.backgroundImage = 'url(./assets/ash.gif)';
    } else if (detailSection.innerText === 'Tornado') {
      containerSection.style.backgroundImage = 'url(./assets/tornado.gif)';
    } else if (detailSection.innerText === 'Clear') {
      containerSection.style.backgroundImage = 'url(./assets/clear.gif)';
    } else {
      containerSection.style.backgroundImage = 'url./assets/(bad.gif)';
    }
  } else {
    degreeSection.innerText = cityname + ' ' + 'not available';
  }
};



