/*
1- update time every seconds
1.1- pad every single digit number with 0
2- change hour style between 24hs and 12h
3- AM/PM if in 12h mode
4- create object arrray to store alarms
5- use Audio to play sound at specified alarm time

*/
const time = document.getElementById('time');
const amPm = document.getElementById('am_pmText');
const modeBtn = document.getElementById('modeBtn')
const textmode24h = document.getElementById('textMode24h')
const weekDayText = document.getElementById('weekDayText');
const monthText = document.getElementById('monthText');
const dayofMonthText = document.getElementById('dayOfMonthText');
const yearText = document.getElementById('yearText');
const addAlarmModal = document.getElementById('addAlarmModal')
const addAlarmBtn = document.getElementById('addAlarmBtn')
const cancelBtn = document.getElementById('cancelBtn');
const confirmCancelBtn = document.getElementById('confirmCancelBtn');
const newAlarmDate = document.getElementById('newAlarmDate');
const alarmDays = document.querySelectorAll('.alarmDays')
let mode = true;
const currentAlarm = {
  hour: null,
  min: null,
  sec: null ,
  title: null,
  date: null,
}
let hour = '';
let minutes = '';
let seconds = '';
let weekDay = '';
let dayOfMonth = ''
let month = '';
let year = '';

// const test = document.getElementById('test')
// console.log(test.dataset.day)

console.log(newAlarmDate.value);

for( const alarm of alarmDays){
  console.log(alarm)
  alarm.addEventListener('click', () => alarm.classList.toggle('selectedDays'))
}

cancelBtn.addEventListener('click', ()=> addAlarmModal.close())
addAlarmBtn.addEventListener('click', () => addAlarmModal.showModal());
const updateCurrentTime = () => { 
  const date = new Date();
  weekDay = date.getDay();
  dayOfMonth = date.getDate() 
  month = date.getMonth()
  year = date.getFullYear()
  hour = date.getHours().toString().padStart(2,0);
  minutes = date.getMinutes().toString().padStart(2,0);
  seconds = date.getSeconds().toString().padStart(2,0);
  weekDayText.innerText = getWeekDayName(weekDay)
  monthText.innerText = getMonthName(month)
  dayofMonthText.innerText = dayOfMonth;
  yearText.innerText = year;
   console.log(yearText.innerText)
  amPm.innerText = hour >= 12? 'PM' : 'AM';
  time.innerText = mode ? `${hourStyle(hour)}:${minutes}:${seconds}` : `${hour}:${minutes}:${seconds}`;
 
};
setInterval(updateCurrentTime, 1000);
setInterval(alarm, 60000);

function getMonthName(numMonth){
  switch(numMonth){
    case 0:
      return 'JANUARY';
    case 1:
      return 'FEBRUARY';
    case 2:
      return 'MARCH';
    case 3:
      return 'APRIL';
    case 4:
      return 'MAY';
    case 5: 
      return 'JUNE';
    case 6:
      return 'JULY';
    case 7:
      return 'AUGUST';
    case 8:
      return 'SEPTEMBER';
    case 9:
      return 'OCTOBER';
    case 10:
      return 'NOVEMBER';
    case 11:
      return 'DECEMBER'
  }
}

function getWeekDayName(numDayOfWeek){
  switch(numDayOfWeek){
    case 0:
      return "SUNDAY";
    case 1:
      return 'MONDAY';
    case 2:
      return 'TUESDAY';
    case 3:
      return 'WEDNESDAY';  
    case 4:
      return 'THURSDAY';
    case 5:
      return 'FRIDAY';
    case 6:
      return 'SATURDAY'
  }

}

function alarm() {
  console.log('alarm: ',hour)
 // if(hour === '14' && minutes === '58'){
//    console.log('alarm time')
//  }else{
//    console.log(minutes, 'no alarm')
//  }
};

function toggleMode(){
  console.log('changed mode')
  if(mode){
    mode = false
    textMode24h.classList.remove('hide')
    amPm.classList.add('hide')
  }else{
   mode = true
   textMode24h.classList.add('hide')
   amPm.classList.remove('hide')
  }
}
function hourStyle(hour){
  if(hour >= 13){
    hour -= 12
  }
  return hour.toString().padStart(2,0)
}

function amOrPm(hour){
  return hour >= 12? 'PM' : 'AM'
}

modeBtn.addEventListener('click',toggleMode)