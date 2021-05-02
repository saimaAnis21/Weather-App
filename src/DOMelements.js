
const errordiv = document.createElement("div");

const form = document.createElement('form');
form.setAttribute('method','post');

const cityinput = document.createElement('input');
cityinput.setAttribute('class','mr-10');
cityinput.setAttribute('type','text');
cityinput.setAttribute('id','cityinput');
cityinput.setAttribute('name','city');
cityinput.setAttribute('placeholder','Enter city');
cityinput.setAttribute('required','true');

const citybtn = document.createElement('input');
citybtn.setAttribute('type','submit');
citybtn.value="Weather Data";

form.appendChild(cityinput);
form.appendChild(citybtn);

const datadiv = document.createElement("div");
datadiv.setAttribute("class","flex-col");

const tempunitbtn = document.createElement("button");
tempunitbtn.innerHTML="Convert to &#8457;";

const cityspan = document.createElement("span");
cityspan.setAttribute("class","item");
const iconimg = document.createElement("img");
iconimg.setAttribute("class","weathericon hidden item");
const tempspan = document.createElement("span");
tempspan.setAttribute("class","item");
const mintempspan = document.createElement("span");
mintempspan.setAttribute("class","item");
const maxtempspan = document.createElement("span");
maxtempspan.setAttribute("class","item");
const weatherspan = document.createElement("span");
weatherspan.setAttribute("class","item");

datadiv.appendChild(tempunitbtn);
datadiv.appendChild(cityspan);
datadiv.appendChild(iconimg);
datadiv.appendChild(tempspan);
datadiv.appendChild(mintempspan);
datadiv.appendChild(maxtempspan);
datadiv.appendChild(weatherspan);

export {
    errordiv, cityinput, citybtn, datadiv, form, tempspan, mintempspan, maxtempspan, weatherspan, cityspan, iconimg, tempunitbtn
  };
