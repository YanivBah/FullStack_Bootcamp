import React, {useState} from 'react';
import axios from "axios";
import List from "./List";

const Home = ({userData}) => {
  const { user, setUser } = userData;
  const [itemVal, setItemVal] = useState(' ');
  const [amountVal, setAmountVal] = useState(0);

  const handleAdd = async () => {
    console.log(user);
    const body = {
      item: itemVal,
      amount: Number(amountVal)
    }
    const header = {headers: { Authorization: `Bearer ${user.token}` }};
    try {
      const data = await axios.patch("/add", body, header);
      const newUser = { ...user };
      newUser.user.shoppingList = data.data;
      await setUser(newUser);
    } catch(e) {
      console.log(e.response);
    }
  }

  return (
    <div>
      <h1>Welcome to your shopping list!</h1>
      <div className="box">
        <p>You can add new items here:</p>
        <div>
          <label htmlFor="item">Item:</label>
          <input
            type="text"
            id="item"
            value={itemVal}
            onChange={(e) => setItemVal(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            min="1"
            value={amountVal}
            onChange={(e) => setAmountVal(e.target.value)}
          />
        </div>
        <button onClick={handleAdd}>Add</button>
      </div>
      <List user={user} />
    </div>
  );
}

export default Home
