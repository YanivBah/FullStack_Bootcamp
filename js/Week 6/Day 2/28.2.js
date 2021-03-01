const myObj = {
  name: 'Yaniv',
  print: function () {
    console.log(this.name);
  },
  printDelay: function () {
    setTimeout(this.print.bind(myObj),1000);
  }
}

myObj.print();
myObj.printDelay();