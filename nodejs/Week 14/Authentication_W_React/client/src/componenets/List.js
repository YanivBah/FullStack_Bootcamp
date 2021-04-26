import React from 'react';
import axios from "axios";

const List = ({userData}) => {
  const { user, setUser } = userData;
  const handleDelete = async (item) => {
    const header = {headers: { Authorization: `Bearer ${user.token}` }};
    try {
      const data = await axios.patch("/delete", item, header);
      const newUser = { ...user };
      newUser.user.shoppingList = data.data;
      setUser(newUser);
    } catch(e) {
      console.log(e.response);
    }
  };

  return (
    <div className="flex">
      {user.user.shoppingList.length > 0 && user.user.shoppingList.map((item, index) => {
        return (
          <div key={index} className="item">
            {index + 1}. {item.item} - Amount: {item.amount}
            <button onClick={() => handleDelete(item)}>Delete</button>
          </div>
        );
      })}
    </div>
  )
}

export default List
