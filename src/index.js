import { errordiv, cityinput, citybtn, datadiv, cityspan,tempspan, mintempspan, maxtempspan, weatherspan, iconimg, tempunitbtn} from './DOMelements';
import { getData } from './weatherinfo';
//require('dotenv').config;
//console.log(process.env.API_KEY);

let citydata ="";
let icon=""
let temp="";
let mintemp="";
let maxtemp="";
let weather = "";
let desc="";
let feelslike= "";

  let weatherdiv = document.getElementById("weatherdata");
  weatherdiv.appendChild(errordiv);
  weatherdiv.appendChild(cityinput);
  weatherdiv.appendChild(citybtn);
  weatherdiv.appendChild(datadiv);

  const populatedata = () => {
    cityspan.innerHTML= `City: ` + `${citydata}`; 
    iconimg.src = ` http://openweathermap.org/img/wn/${icon}@2x.png`;
    
    tempspan.innerHTML= `Temperature: ` + `${temp} &#8451;` + `, feels like ${feelslike} &#8451;`;
    mintempspan.innerHTML= `Minimum Temperature: ` + `${mintemp} &#8451;`;
    maxtempspan.innerHTML= `Maximum Temperature: ` + `${maxtemp} &#8451;`;
    weatherspan.innerHTML= `Weather: ` + `${weather}` + `, ${desc}`;
  }


  citybtn.addEventListener('click', async () => {
    let city ="";
    if(cityinput.value===""){
      city = "karachi";
    }
    else{
      city = cityinput.value;
    }
    const dataobj = await getData(city);
    const data = await dataobj;
    console.log(data);
     citydata = await data["name"];
     icon = data["weather"][0].icon;
     temp = data["main"].temp;
     mintemp = data["main"].temp_min;
     maxtemp = data["main"].temp_max;
     weather=data["weather"][0].main;
     desc=data["weather"][0].description;
     feelslike = data["main"].feels_like;
     iconimg.setAttribute("class","weathericon visible");
     populatedata();
  });

 