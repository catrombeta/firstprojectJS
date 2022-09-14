// const p = document.querySelector('.col-6 p');
const endDate = new Date(2023, 2, 9, 16, 00, 00, 000);

const weekDay = date.getDay();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

let weekDayText;

if (weekDay === 0) {
    weekDayText = 'Sunday';
} else if (weekDay === 1) {
    weekDayText = 'Monday';
} else if (weekDay === 2) {
    weekDayText = 'Tuesday';
} else if (weekDay === 3) {
    weekDayText = 'Wednesday';
} else if (weekDay === 4) {
    weekDayText = 'Thursday';
} else if (weekDay === 5) {
    weekDayText = 'Friday';
} else if (weekDay === 6) {
    weekDayText = 'Saturday';
}

let monthText;

switch (month) {
    case 0: monthText = 'January';
    break;
    case 1: monthText = 'February';
    break;
    case 2: monthText = 'March';
    break;
    case 3: monthText = 'April';
    break;
    case 4: monthText = 'May';
    break;
    case 5: monthText = 'June';
    break;
    case 6: monthText = 'July';
    break;
    case 7: monthText = 'August';
    break;
    case 8: monthText = 'September';
    break;
    case 9: monthText = 'October';
    break;
    case 10: monthText = 'November';
    break;
    case 11: monthText = 'December';
    break;
}

console.log(month);

