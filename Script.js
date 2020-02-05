console.log("Hello");
let root = document.documentElement;

function mouseOver(){
   root.style.setProperty('--Genius', 1.05);
   root.style.setProperty('--WhitetoBlue', "#79a8c0");
   root.style.setProperty('--JustBluetoWhite', "white");
}
function mouseOut(){
   root.style.setProperty('--Genius', .9);
   root.style.setProperty('--WhitetoBlue', "white");
   root.style.setProperty('--JustBluetoWhite', "#79a8c0");
}
function JS(){
  root.style.setProperty('--JS', 1);
}
function BJS(){
  root.style.setProperty('--JS', 0);
}
