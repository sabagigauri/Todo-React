import React from 'react'
import "./TodoDiv.css";
import image from "../IMG/Oval-Copy.png";

const TodoDiv = () => {

//     const input = document.getElementById("input");
//     const addTasksButton = document.getElementById("id2");

// let tasks = [];
    
// const addTask = () => {
//   if (tasks.length >= 10) {
//     alert("Maximum tasks limit reached!");
//     return;
//   }

//   if (input.value === "") {
//     error.style.color = "red";
//     error.innerHTML = "Can't be empty!";
//   } else {
//     tasks.push(input.value);
//   }
//     }
    
//     addTasksButton.addEventListener("click", addTask);

//     input.addEventListener("keydown", function (event) {
//       if (event.key === "Enter") {
//         addTask();
//       }
//     });

    return (
        <div className="todo">
            <img src={image}></img>
            <input type="text" placeholder="Create a new todo..." id="input"></input>
            <button id="id2">+</button>
        </div>
  )
}

export default TodoDiv;