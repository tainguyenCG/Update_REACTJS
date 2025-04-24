
const TodoNew = (props) => {
  const {addNewTodo} = props;

  // addNewTodo("thanhtai");
  return (
    <>
      <div className="todo_new">
        <input type="text" />
        <button>Add</button>
      </div>
    </>
  );
};
export default TodoNew;
