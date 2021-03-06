import {
  errordiv, cityinput, citybtn, datadiv, cityspan, tempspan, weatherspan,
  iconimg, tempunitbtn, feelslikespan,
} from './DOMelements';
import getData from './weatherinfo';
import '../stylesheets/css-reset.css';
import '../stylesheets/styles.css';


let citydata = '';
let icon = '';
let temp = '';

let weather = '';
let desc = '';
let feelslike = '';
let unit = '';

const weatherdiv = document.getElementById('weatherdata');
weatherdiv.appendChild(errordiv);
weatherdiv.appendChild(cityinput);
weatherdiv.appendChild(citybtn);
weatherdiv.appendChild(datadiv);

const populatedata = () => {
  cityspan.innerHTML = `${citydata}`;
  iconimg.src = ` https://openweathermap.org/img/wn/${icon}@2x.png`;
  let unitdisplay = '';
  if (unit === 'c') {
    unitdisplay = '&#8451;';
  } else {
    unitdisplay = '&#8457;';
  }
  tempspan.innerHTML = `${temp} ${unitdisplay}`;
  feelslikespan.innerHTML = `feels like ${feelslike} ${unitdisplay}`;
  weatherspan.innerHTML = `${weather} , ${desc}`;
};

const toggleunit = () => {
  if (unit === 'c') {
    temp = (((temp) * (9 / 5)) + 32).toFixed(0);
    feelslike = (((feelslike) * (9 / 5)) + 32).toFixed(2);
    unit = 'f';
    tempunitbtn.innerHTML = 'Convert to &#8451;';
  } else {
    temp = ((temp - 32) * (5 / 9)).toFixed(0);
    feelslike = ((feelslike - 32) * (5 / 9)).toFixed(2);
    unit = 'c';
    tempunitbtn.innerHTML = 'Convert to &#8457;';
  }
  populatedata();
};

const getDataFromApi = async () => {
  const city = cityinput.value;

  const dataobj = await getData(city);
  const data = dataobj;

  if (data.cod === 200) {
    citydata = data.name;
    icon = data.weather[0].icon;
    temp = data.main.temp;
    weather = data.weather[0].main;
    desc = data.weather[0].description;
    feelslike = data.main.feels_like;
    iconimg.classList.add('visible');
    tempunitbtn.classList.add('visible');
    unit = 'c';
    populatedata();
  }
};

window.addEventListener('load',
  () => {
    getDataFromApi();
  }, false);


citybtn.addEventListener('click', () => {
  getDataFromApi();
});

tempunitbtn.addEventListener('click', () => {
  toggleunit();
});