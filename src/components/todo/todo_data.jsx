const TodoData = (props) => {
  const { todoList } = props;

  // console.log({ todoList });
  return (
    <>
      <div className="todo_data">
        {todoList.map((item) => {
          return (
            <div className= {`todo_item`} key={item.id}>
              <>{item.name}</>
              <>
                <button>Delete</button>
              </>
            </div>
          );
        })}
    
      </div>
    </>
  );
};

export default TodoData;
