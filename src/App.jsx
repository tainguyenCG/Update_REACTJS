import { useState } from "react";
import "./components/todo/todo.css";
import TodoData from "./components/todo/todo_data";
import TodoNew from "./components/todo/todo_new";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning ReactJS" },
    { id: 2, name: "Learning native " },
    
  ]);

  const name = "thanhtai";
  const age = 25;
  const data = {
    address: "Tanan",
    country: "vietnam",
  };


  const addNewTodo = (name) => {
    const newTodo = {
      id : randomIntFromInterval(1, 1000000),
      name : name
    }
    setTodoList([...todoList, newTodo])// [...todoList, newTodo] copy lại data trước đó và thêm mới data
  };
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  


  return (
    <>
      <div className="todo_container">
        <div className="todo_title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        <TodoData
          name={name}
          age={age}
          data={data}
          todoList={todoList}
        />
        <div className="todo_img">
          <img
            className="rounded-2xl max-h-[1800px]"
            src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-illustration-download-in-svg-png-gif-file-formats--password-profile-businessman-pack-business-illustrations-5857593.png?f=webp"
            alt="login form"
          />
        </div>
      </div>
    </>
  );
};

export default App;
