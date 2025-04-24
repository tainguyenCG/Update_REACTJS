import "./components/todo/todo.css";
import TodoData from "./components/todo/todo_data";
import TodoNew from "./components/todo/todo_new";

const App = () => {
  return (
    <>
      <div className="todo_container">
        <div className="todo_title">Todo List</div>
        <TodoNew />
        <TodoData />
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
