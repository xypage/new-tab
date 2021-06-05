let date = new Date();
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getDate() {
  let year = date.getFullYear();
  let monthNumber = date.getMonth();
  let monthName = months[monthNumber];
  let monthday = date.getDate();
  let weekday = weekdays[date.getDay()];

  let hour = date.getHours(); // Note that this is in 24 hour time by default
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return {
    "year": year,
    "monthNumber": monthNumber,
    "monthName": monthName,
    "date": monthday,
    "weekday": weekday,
    "hour": hour,
    "minutes": minutes,
    "seconds": seconds
  }
}

function setDate(div) {
  let dateObj = getDate();
  let innerString = `Today is ${dateObj.weekday}, ${dateObj.monthName} ${dateObj.date}${getSuffix(dateObj.date)}\nand the time is ${dateObj.hour}:${dateObj.minutes}`;
  div.innerText = innerString;
}

function getSuffix(number) {
  if(number == 11 || number == 12 || number == 13) {
    return "th";
  }
  switch (number % 10) {
    case 1:
      return "st";
      break;
    case 2:
      return "nd";
      break;
    case 3:
      return "rd";
      break;
    default:
      return "th";
      break;
  }
}