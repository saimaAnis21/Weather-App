import { errordiv, cityinput, citybtn, datadiv, form } from './DOMelements';
import { getData } from './weatherinfo';
//require('dotenv');
//console.log(process.env.API_KEY);

  const weatherdiv = document.getElementById("weatherdata");

  weatherdiv.appendChild(errordiv);
  weatherdiv.appendChild(cityinput);
  weatherdiv.appendChild(citybtn);
  weatherdiv.appendChild(datadiv);

  let weatherdata = "";
  citybtn.addEventListener('click', async () => {
    let city = "";
    if(cityinput.value===""){
      city = "karachi";
    }
    else{
      city = cityinput.value;
    }
    const dataobj = await getData(city);
    const data = dataobj;
    weatherdata = data["main"].temp;
    datadiv.innerText = weatherdata;

  });


