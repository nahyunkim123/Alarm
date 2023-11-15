
let batteryPercentage = 100;
const clockScreen = document.querySelector(".time");

const batteryLevelElement = document.getElementById("battery-level");

function updateBattery() {
 
  if (batteryPercentage > 0) {
    batteryPercentage -= 1;
    batteryLevelElement.textContent = `${batteryPercentage}%`;
    const innerWidth = batteryPercentage + "%";
    document.querySelector("#battery .battery-inner").style.width = innerWidth;
  } 
  else {
    batteryPercentage = 0;
    batteryLevelElement.textContent = "0%";
    batteryLevelElement.style.width = "0%";
    document.getElementById("screen").style.background = "#090909";
    document.querySelector(".content").style.display = "none";

  }
}

document.getElementById("onOff").addEventListener("click", function () {
  batteryPercentage = 100;
  batteryLevelElement.textContent = "100%";
  batteryLevelElement.style.width = "100%";
  document.getElementById("screen").style.background = "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"; 
  document.querySelector(".content").style.display = "block";
});


function Clock() {
 
  const Current = new Date();


  let years = Current.getFullYear();
  let months =
    Current.getMonth() + 1 < 10
      ? "0" + (Current.getMonth() + 1)
      : Current.getMonth() + 1;
  let days =
    Current.getDate() < 10 ? "0" + Current.getDate() : Current.getDate();
  let hours = Current.getHours() % 12 ? Current.getHours() % 12 : 12;
  let minutes =
    Current.getMinutes() < 10
      ? "0" + Current.getMinutes()
      : Current.getMinutes();
  let seconds =
    Current.getSeconds() < 10
      ? "0" + Current.getSeconds()
      : Current.getSeconds();
  let ap = Current.getHours() < 12 ? "AM" : "PM";


  const time = `${years}년 ${months}월 ${days}일 ${ap} ${hours}시 ${minutes}분 ${seconds}초`;
  clockScreen.textContent = time;

 
  setTimeout(() => {
    Clock();
    updateBattery();
  }, 1000);
}
Clock();


const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const secondInput = document.getElementById("second");
const addAlarmButton = document.getElementById("add-alarm");
const alarmScreen = document.getElementById("alarm-screen");


const alarms = [];


function addAlarm() {
  const hour = parseInt(hourInput.value, 10);
  const minute = parseInt(minuteInput.value, 10);
  const second = parseInt(secondInput.value, 10);

  if (isNaN(hour) || isNaN(minute) || isNaN(second)) {
    return;
  }

  if (alarms.length >= 3) {
    alert("알람은 최대 3개까지 추가 가능합니다");
    return;
  }

  const alarmTime = new Date();
  alarmTime.setHours(hour, minute, second, 0);
  alarms.push(alarmTime);

  displayAlarms();
  resetInputFields();
}


function formatTime(e) {
  const hours = e.getHours().toString().padStart(2, "0");
  const minutes = e.getMinutes().toString().padStart(2, "0");
  const seconds = e.getSeconds().toString().padStart(2, "0");
  return `${hours}시 ${minutes}분 ${seconds}초`;
}


function displayAlarms() {
  alarmScreen.innerHTML = "";
  alarms.forEach((alarm, index) => {
    const alarmElement = document.createElement("div");
    alarmElement.textContent = `${index + 1} | ${formatTime(alarm)}`;
    alarmElement.style.marginBottom = "3px";
    alarmScreen.appendChild(alarmElement);
  });
}

function resetInputFields() {
  hourInput.value = "";
  minuteInput.value = "";
  secondInput.value = "";
}


addAlarmButton.addEventListener("click", addAlarm);



function dDay(){
 
    let countDown = new Date("2024-01-01");
     let x = setInterval(function()
     {
        let now = new Date()
       
        let end = countDown - now;
        
        let d = Math.floor(end / (1000 * 60 * 60 * 24))

        const text = "D -" + d ;
        document.querySelector(".dday span").textContent = text
     })
}

dDay(); 