import React, { useState } from "react";

const Checkbox = (props) => {
  const initialData = props.data.map(el => {
    return {title: el, checked: false, hide: false};
  });

  const [data, setData] = useState(initialData);

  const onCheck = (index) => {
    const newData = [...data];
    newData[index].checked = !newData[index].checked;
    setData(newData);
  }

  const onDelete = () => {
    const newData = [...data];
    newData.forEach(el => {
      if (el.checked) {
        el.hide = true;
      }
    });
    setData(newData);
  }

  const onReset = () => {
    const newData = [...data];
    newData.forEach((el) => {
      el.checked = false;
      el.hide = false;
    });
    setData(newData);
  }

  return (
    <div>
      {data.map((el, index) => {
        if (!el.hide) {
          return (
            <div key={`checkbox${index}`}>
              <input
                checked={el.checked}
                type="checkbox"
                onChange={() => onCheck(index)}
              />
              <label htmlFor="">{el.title}</label>
            </div>
          );
        } else {
          return null;
        }
      })}
      <button onClick={onDelete}>Delete</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Checkbox;
