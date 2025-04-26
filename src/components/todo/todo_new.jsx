
const TodoNew = (props) => {
  const {addNewTodo} = props;

  // addNewTodo("thanhtai");
  const handleClick = () =>{
    alert("Bạn đã thêm thành công")
  }

  const handleOnChange = () =>{
    console.log("handleOnChange", event.target.value)
  }
  return (
    <>
      <div className="todo_new">
        <input type="text"
        onChange={(event) => {handleOnChange(event.target.value)}} /> 
        {/* onChange gõ giá trị vào input */}
        <button
        style={{cursor: "pointer"}}
        onClick={handleClick} //onClick sử dụng chuột để click
        >Add</button>
      </div>
    </>
  );
};
export default TodoNew;
