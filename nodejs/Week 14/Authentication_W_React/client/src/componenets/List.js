import React from 'react'

const List = ({user}) => {
  console.log(user);
  return (
    <div>
      {user.user.shoppingList.map((item, index) => {
        return (
          <div key={index}>
            {index}. {item.item} - Amount: {item.amount}
          </div>
        );
      })}
    </div>
  )
}

export default List
