const storm = {
  superPower: 'flying',
  invoke: printSuperPower,
}
function printSuperPower() {
console.log("my superpower is " + this.superPower);
}

storm.invoke();
