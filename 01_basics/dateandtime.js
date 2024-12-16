//current date and time
let currentdate = new Date();
console.log(Date());//Mon Dec 16 2024 21:10:16 GMT+0000 (Coordinated Universal Time)

//Specific date and time
let specificDateandTime = new Date(2024, 0, 23 ,0 ,0)
console.log(specificDateandTime);//2024-01-23T00:00:00.000Z

//Getting current year
let date = new Date();
let currentYear = date.getFullYear();
console.log(currentYear);//2024

//Get current month
let date1 = new Date();
let currentMonth = date1.getMonth();
console.log(currentMonth);//11

//get current day
let date2 = new Date();
let currentDay = date2.getDate();//16
console.log(currentDay);

//get current hours minutes and seconds
let date3 = new Date();
let hours = date3.getHours();
let minutes = date3.getMinutes();
let seconds = date3.getSeconds();
console.log(hours, minutes, seconds); // 21 39 35

//get current weekday (0 is sunday, 6 is saturday)
let date4 = new Date();
let currentWeekday = date4.getDay();
console.log(currentWeekday);//1
