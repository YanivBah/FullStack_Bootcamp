const Obj = {
  firstName: 'Yaniv',
  lastName: 'Bahalker',
  city: 'Ramla',
};

console.log(Obj);

const swap = function (obj) {
  let newObj = {};
  for (let property in obj) {
    newObj[obj[property]] = property;
  }
  return newObj;
}

console.log(swap(Obj));