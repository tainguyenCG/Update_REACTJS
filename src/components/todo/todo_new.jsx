import { useState } from "react";

const TodoNew = (props) => {
  const { addNewTodo } = props;

  // addNewTodo("thanhtai");

  const [valueInput, setValueInput] = useState("");
  const handleClick = () => {
    addNewTodo(valueInput);
    // console.log("check:", valueInput);
    setValueInput("")
  };

  const handleOnChange = (name) => {
    setValueInput(name);
  };
  return (
    <>
      <div className="todo_new">
        <input
          type="text"
          value={valueInput}
          onChange={(event) => {
            handleOnChange(event.target.value);
          }}
        />
        {/* onChange gõ giá trị vào input */}
        <button
          style={{ cursor: "pointer" }}
          onClick={handleClick} //onClick sử dụng chuột để click
        >
          Add
        </button>
      </div>
      {/* <div>My text input is {valueInput}</div> */}
    </>
  );
};
export default TodoNew;
