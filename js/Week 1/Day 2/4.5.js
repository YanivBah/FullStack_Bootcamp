// console.log(2012 / 4); //true
// console.log(2012 / 100); //true
// console.log(2012 / 400); //false


function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(`It is indeed a leap year!`);
  } else {
    console.log(`This is not a leap year.`);
  }
}

leapYear(2012);
leapYear(2100);
leapYear(2400);
