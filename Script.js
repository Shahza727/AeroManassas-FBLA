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
window.addEventListener("load", function () {
    const loader = document.querySelector(".PreLoader");
    loader.className += " hidden"; // class "loader hidden"
});
function mouseOver2(){
   root.style.setProperty('--Shambles', .8);
   root.style.setProperty('--WhitetoBlue2', "#79a8c0");
   root.style.setProperty('--JustBluetoWhite2', "white");
   root.style.setProperty('--solidtodashed', 'dotted')
}
function mouseOut2(){
   root.style.setProperty('--Shambles', .7);
   root.style.setProperty('--WhitetoBlue2', "white");
   root.style.setProperty('--JustBluetoWhite2', "#79a8c0");
   root.style.setProperty('--solidtodashed', 'solid')
}
