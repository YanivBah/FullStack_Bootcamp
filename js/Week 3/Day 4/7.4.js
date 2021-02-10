const candyStore = {
  candies: [
    {
      name: 'mint gum',
      id: 'as12f',
      price: 2,
      amount: 2,
    },
    {
      name: 'twix',
      id: '5hd7y',
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

const candyStoreUtils = {
  getCandy: function(candyStore, id) {
    const get = candyStore.candies.find(x => x.id === id);
    return get;
  },
  getPrice: function(candyStore, id) {
    const get = this.getCandy(candyStore, id);
    return get.price;
  },
  addCandy: function(candyStore, id, name, price) {
    candyStore.candies[candyStore.candies.length] = {
      name,
      id,
      price,
      amount: 1,
    }
  },
  buy: function(candyStore, id) {
    const get = this.getPrice(candyStore, id);
    candyStore.cashRegister += get;
    const candy = this.getCandy(candyStore,id);
    // const index = candyStore.candies.indexOf(obj);
    candy.amount -= 1;
  }
};

console.log(candyStoreUtils.getCandy(candyStore, '5hd7y')); //Q1
console.log(candyStoreUtils.getPrice(candyStore, '5hd7y')); //Q2
candyStoreUtils.addCandy(candyStore, '3ff6z', 'M&M', 8); //Q3
candyStoreUtils.buy(candyStore, 'as12f'); //Q4

console.log(candyStore.candies);