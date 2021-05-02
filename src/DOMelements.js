
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
datadiv.setAttribute("class","flex-row");

const tempunitbtn = document.createElement("button");
tempunitbtn.innerHTML="Convert to &#8457;";
tempunitbtn.setAttribute("class","item-fc hidden");

const cityspan = document.createElement("span");
cityspan.setAttribute("class","item-fc");

const iconimg = document.createElement("img");
iconimg.setAttribute("class","weathericon hidden item-fc ");

const tempspan = document.createElement("span");
tempspan.setAttribute("class","item-fc");

const weatherspan = document.createElement("span");
weatherspan.setAttribute("class","item-fc");

const feelslikespan = document.createElement("span");
feelslikespan.setAttribute("class","item-fc");


const div1= document.createElement("div");
div1.setAttribute("class","flex-col item-fr");
const div2= document.createElement("div");
div2.setAttribute("class","flex-col item-fr");

div1.appendChild(cityspan);
div1.appendChild(iconimg);
div2.appendChild(tempspan);
div2.appendChild(feelslikespan);
div2.appendChild(tempunitbtn);
div2.appendChild(weatherspan);


datadiv.appendChild(div1);
datadiv.appendChild(div2);

export {
    errordiv, cityinput, citybtn, datadiv, form, tempspan, weatherspan, cityspan, iconimg, tempunitbtn, feelslikespan
  };
