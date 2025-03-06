let hSecond = document.querySelector(".hand.second");
let hMinute = document.querySelector(".hand.minute");
let hHour = document.querySelector(".hand.hour");


function setDate(){
  const now = new Date();
  const second = now.getSeconds();
  const secondDegress = (second * 360) / 60;
  hSecond.style.transform = `rotate(${secondDegress}deg)`
  const minute = now.getMinutes();
  const minuteDegress = (minute * 360) / 60;
  hMinute.style.transform = `rotate(${minuteDegress}deg)`
  const hour = now.getHours();
  const hourDegress = (hour * 360) / 12;
  hHour.style.transform = `rotate(${hourDegress}deg)`
}
setInterval(setDate , 1000);