const TodoData = (props) => {
  const { todoList } = props;

  // console.log({ todoList });
  return (
    <>
      <div className="todo_data">
        {todoList.map((item, index) => {
          return (
            <div className="todo_item">
              <>{item.name}</>
              <>
                <button>Delete</button>
              </>
            </div>
          );
        })}
        {/* <div>
          {JSON.stringify(todoList)}
        </div> */}
      </div>
    </>
  );
};

export default TodoData;
