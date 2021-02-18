// Ex2.6 - Years and Centuries
const centuryFromYear = (year) => {
  const cent = Math.trunc(year / 100);
  return year %100 !== 0 ? cent + 1 : cent;
}

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));