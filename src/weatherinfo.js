import API_KEY from './apikey';
import { errordiv } from './DOMelements';

const apikey = API_KEY;

const getcity = async () => {
  const responsegeoloc = await fetch('http://ip-api.com/json/?fields=city', {
    method: 'GET',
    mode: 'cors',

  });
  const latlondata = await responsegeoloc.json();
  return latlondata;
};


const getData = async (city) => {
  if (city === '') {
    const cityobj = await getcity();
    city = cityobj.city;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
  let data = '';

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',

  });


  data = await response.json();
  if (data.cod === '404') {
    errordiv.innerText = data.message;
  }
  if (data.cod === 200) {
    errordiv.innerText = '';
  }
  return data;
};


export default getData;