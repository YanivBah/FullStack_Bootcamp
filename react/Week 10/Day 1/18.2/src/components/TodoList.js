import React, { useState } from "react";
import './todolist.css';

const ToDoList = (props) => {
  const staticData = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ];

  const [data, setData] = useState(staticData);
  return (
    <div>
      {data.map((task, index) => {
        const isCompleted = task.completed ? 'completed' : ''; 
        return (
          <p 
          key={`task${index}`} 
          className={`task ${isCompleted}`} 
          onClick={() => {
            console.log(index);
            const newData = [...data];
            newData[index].completed = !newData[index].completed;
            setData(newData);
          }}
          >
            {task.name}
            {task.completed ? (
              <span style={{ color: "#7FFF00" }}>✓</span>
            ) : (
              <span style={{ color: "red" }}>✘</span>
            )}
          </p>
        );
      })}
    </div>
  );
};

export default ToDoList;
