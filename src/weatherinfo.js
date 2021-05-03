import API_KEY from './apikey';

const apikey = API_KEY;
const getData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',

  });
  const data = response.json();
  return data;
};

export default getData;