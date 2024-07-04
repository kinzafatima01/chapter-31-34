// Number 1:

var  now = new Date();
var  currentDateTime = now.toLocaleString();
  document.write(currentDateTime);



// // Number 2:

var  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var  right = new Date();
var  currentMonth = monthNames[now.getMonth()];
  alert(currentMonth);



// Number 3:

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var  today = new Date().getDay();
var  firstThreeLetters = days[today].slice(0, 3);
  alert(firstThreeLetters);


// Number 4:

// var  yesterday = new Date().getDay();
//   if (yesterday === 0 || yesterday === 6) {
//     document.write("It's Fun day!");
//   }


// Number 5:

var date = new Date();
var day = date.getDate();
if (day < 16) {
  document.write("First fifteen days of the month");
} else {
  document.write("Last days of the month");
}

// Number 6:


var timeStamp = new Date();
let minutesSinceEpoch;
minutesSinceEpoch = Math.floor(timeStamp.getTime() / 60000);
document.write(minutesSinceEpoch);


// Number 7:


var now = new Date();
var hour = now.getHours();
if (hour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// Number 8:

var laterDate = new Date(2020, 11, 31);

// Number 9:


var ramadanStartDate = new Date('June 18, 2015');
  var today = new Date();
  var daysPast = Math.round((today - ramadanStartDate)/171);
  alert(daysPast + ' days have passed since 1st Ramadan, 2015');


// Number 10:

var referenceDate = new Date('January 1, 1970 00:00:00');
  var beginningOf2015 = new Date('January 1, 2015 00:00:00');
  var secondsElapsed = (beginningOf2015 - referenceDate) / 1000;
  document.write(secondsElapsed + ' seconds have elapsed since the reference date');
