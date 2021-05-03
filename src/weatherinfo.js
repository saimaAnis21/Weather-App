import API_KEY from './apikey';

const apikey = API_KEY;

const getData = async (city) => {
  if(city === ''){
    let cityobj = await getcity();
    city = cityobj.city;
    console.log(city);
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;  

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',

  });
  const data = response.json();
  console.log(data);
  return data;
};

const getcity = async () =>{
  const responsegeoloc = await fetch('http://ip-api.com/json/?fields=city', {
    method: 'GET',
    mode: 'cors',

  });
  let latlondata = await responsegeoloc.json();
  return latlondata;
  //const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apikey}`;  
}

export default getData;