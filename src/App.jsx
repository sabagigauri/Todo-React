// import React from 'react'
// import './App.css'
// import Container from './Components/Container/Container';

// function App() {

//   const input = document.getElementById("input");
//   const addTasksButton = document.getElementById("id2");
//   const error = document.getElementById("error");
//   const todo = document.getElementById("list");
//   const toggleBtn = document.querySelector(".moonToggle");
//   const todosInput = document.querySelector(".todo");

//   let tasks = [];

//   function addTask() {
//     if (tasks.length >= 10) {
//       alert("Maximum tasks limit reached!");
//       return;
//     }

//     if (input.value === "") {
//       error.style.color = "red";
//       error.innerHTML = "Can't be empty!";
//     } else {
//       tasks.push(input.value);

//       if (!todo.querySelector("ul")) {
//         const ul = document.createElement("ul");
//         todo.appendChild(ul);
//       }

//       const ul = todo.querySelector("ul");

//       const li = document.createElement("li");
//       li.innerHTML = `
//       <div style="display: flex; justify-content: space-between; align-items: center ; margin-left:-20px; padding-right-20px ">
//           <input type="checkbox" class="check">
//           <span class="list-item">${input.value}</span>
//           <button class="btn-1" onclick="Delete">X</button>
//       </div>
//     `;
//       ul.appendChild(li);

//       const checkbox = li.querySelector(".check");
//       const listItem = li.querySelector(".list-item");
//       const deleteButton = li.querySelector(".btn-1");
//       deleteButton.addEventListener("click", deleteBtn);
//       checkbox.addEventListener("click", () => {
//         if (checkbox.checked) {
//           listItem.style.textDecoration = "line-through";
//           listItem.style.color = "gray";
//         } else {
//           listItem.style.textDecoration = "none";
//           listItem.style.color = "initial";
//         }
//       });

//       ul.style.listStyle = "none";

//       input.value = "";
//     }
//   }

//   addTasksButton.addEventListener("click", addTask);

//   input.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });

//   function deleteBtn(event) {
//     event.target.closest("li").remove();
//     const taskIndex = tasks.indexOf(
//       event.target.previousElementSibling.textContent
//     );
//     if (taskIndex !== -1) {
//       tasks.splice(taskIndex, 1);
//     }
//     if (tasks.length === 0) {
//       tasks = [];
//       todo.querySelector("li").style.borderBottom = "none";
//     }
//   }

//   toggleBtn.addEventListener("click", () => {
//     toggleBtn.classList.toggle("darkmode");
//     document.body.style.backgroundColor = toggleBtn.classList.contains(
//       "darkmode"
//     )
//       ? "#171823"
//       : "white";
//     todo.style.backgroundColor = toggleBtn.classList.contains("darkmode")
//       ? "#25273d"
//       : "white";
//     todosInput.style.backgroundColor = toggleBtn.classList.contains("darkmode")
//       ? "#25273d"
//       : "white";
//     input.style.backgroundColor = toggleBtn.classList.contains("darkmode")
//       ? "#25273d"
//       : "white";
//   });


//   return (
//     <>
//       <Container />
//     </>
//   );
// }

// export default App;





// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Container from "./Components/Container/Container";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const addTasksButton = document.getElementById("id2");
//     addTasksButton.addEventListener("click", addTask);

//     return () => {
//       addTasksButton.removeEventListener("click", addTask);
//     };
//   }, [tasks]);

//   function addTask() {
//     if (tasks.length >= 10) {
//       alert("Maximum tasks limit reached!");
//       return;
//     }

//     if (inputValue === "") {
//       setError("Can't be empty!");
//     } else {
//       setTasks((prevTasks) => [...prevTasks, inputValue]);
//       setInputValue("");
//       setError("");
//     }
//   }

//   useEffect(() => {
//     const deleteButtons = document.querySelectorAll(".btn-1");
//     deleteButtons.forEach((button) => {
//       button.addEventListener("click", deleteBtn);
//     });

//     return () => {
//       deleteButtons.forEach((button) => {
//         button.removeEventListener("click", deleteBtn);
//       });
//     };
//   }, [tasks]);

//   function deleteBtn(event) {
//     const taskToDelete = event.target.previousElementSibling.textContent;
//     setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
//   }

//   return (
//     <>
//       <div id="list">
//         <ul>
//           {tasks.map((task, index) => (
//             <li key={index}>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   marginLeft: "-20px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <input type="checkbox" className="check" />
//                 <span className="list-item">{task}</span>
//                 <button className="btn-1">X</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <input
//         id="input"
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button id="id2">Add Task</button>
//       <div id="error" style={{ color: "red" }}>
//         {error}
//       </div>
//       <Container />
//     </>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "./Components/Container/Container";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const addTasksButton = document.getElementById("id2");
    addTasksButton.addEventListener("click", addTask);

    return () => {
      addTasksButton.removeEventListener("click", addTask);
    };
  }, [tasks]);

  useEffect(() => {
    const addTasksButton = document.getElementById("id2");
    const input = document.getElementById("input");

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    };

    addTasksButton.addEventListener("click", addTask);
    input.addEventListener("keypress", handleKeyPress);

    return () => {
      addTasksButton.removeEventListener("click", addTask);
      input.removeEventListener("keypress", handleKeyPress);
    };
  }, [tasks]);


  useEffect(() => {
    const deleteButtons = document.querySelectorAll(".btn-1");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", deleteBtn);
    });

    return () => {
      deleteButtons.forEach((button) => {
        button.removeEventListener("click", deleteBtn);
      });
    };
  }, [tasks]);

  function addTask() {
    const input = document.getElementById("input");
    const todo = document.getElementById("list");

    if (tasks.length >= 10) {
      alert("Maximum tasks limit reached!");
      return;
    }

    if (input.value === "") {
      setError("Can't be empty!");
    } else {
      setTasks((prevTasks) => [...prevTasks, input.value]);
      setInputValue("");
      setError("");

      const ul = todo.querySelector("ul") || document.createElement("ul");
      todo.appendChild(ul);

      const li = document.createElement("li");
      li.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-left: -20px; padding-right: 20px;">
          <input type="checkbox" class="check">
          <span class="list-item">${input.value}</span>
          <button class="btn-1">X</button>
        </div>
      `;
      ul.appendChild(li);

      const checkbox = li.querySelector(".check");
      const listItem = li.querySelector(".list-item");
      const deleteButton = li.querySelector(".btn-1");

      deleteButton.addEventListener("click", deleteBtn);
      checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
          listItem.style.textDecoration = "line-through";
          listItem.style.color = "gray";
        } else {
          listItem.style.textDecoration = "none";
          listItem.style.color = "initial";
        }
      });
    }
  }

  function deleteBtn(event) {
    const taskToDelete = event.target.previousElementSibling.textContent;
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
    event.target.closest("li").remove();
  }

  return (
    <>
      <Container />
    </>
  );
}

export default App;
