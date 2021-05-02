
const errordiv = document.createElement("div");

const form = document.createElement('form');
form.setAttribute('method','post');

const cityinput = document.createElement('input');
cityinput.setAttribute('type','text');
cityinput.setAttribute('id','cityinput');
cityinput.setAttribute('name','city');
cityinput.setAttribute('placeholder','Enter city');
cityinput.setAttribute('required','true');

const citybtn = document.createElement('input');
citybtn.setAttribute('type','submit');
citybtn.value="Submit";

form.appendChild(cityinput);
form.appendChild(citybtn);

const datadiv = document.createElement("div");
datadiv.setAttribute("class","flex-col");

export {
    errordiv, cityinput, citybtn, datadiv, form
  };
