import { useState } from "react";
import "./todo.css";
import TodoData from "./todo_data";
import TodoNew from "./todo_new";


const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // ✅ Hàm xoá todo theo id
  const handleDeleteTodo = (id) => {
    // Lọc ra danh sách mới, chỉ giữ lại những todo có id KHÁC với id được truyền vào
    const updatedList = todoList.filter((item) => item.id !== id);
    // Cập nhật lại state todoList với danh sách mới (đã loại bỏ item có id cần xóa)
    setTodoList(updatedList);
  };
  return (
    <div className="container">
      <div className="todo_container ">
        <div className="todo_title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        {todoList.length > 0 ? (
          <TodoData todoList={todoList} onDelete={handleDeleteTodo} />
        ) : (
          <div className="todo_img">
            <img
              className="rounded-2xl max-h-[1800px]"
              src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-illustration-download-in-svg-png-gif-file-formats--password-profile-businessman-pack-business-illustrations-5857593.png?f=webp"
              alt="login form"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default TodoApp;
