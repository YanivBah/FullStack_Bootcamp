function getTodayDate() {
  const date = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  console.log(`Today is ${days[date.getDay()]} the ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`);

}

getTodayDate();