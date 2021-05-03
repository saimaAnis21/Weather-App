import API_KEY from './apikey';

const apikey = API_KEY;

const getcity = async () => {
  const responsegeoloc = await fetch('https://ip-api.com/json/?fields=city', {
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

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',

  });
  const data = response.json();
  return data;
};


export default getData;