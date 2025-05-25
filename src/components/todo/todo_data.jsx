// const TodoData = (props) => {
//   const { todoList } = props;

//  const handleClick = () =>{
//   alert("test")
//  }
//   return (
//     <>
//       <div className="todo_data">
//         {todoList.map((item) => {
//           return (
//             <div className= {`todo_item`} key={item.id}>
//               <>{item.name}</>
//               <>
//                 <button onClick={handleClick}>Delete</button>
//               </>
//             </div>
//           );
//         })}
    
//       </div>
//     </>
//   );
// };

// export default TodoData;
// todo_data.jsx
const TodoData = (props) => {
  const { todoList, onDelete } = props;

  // ✅ Hàm gọi xoá với id tương ứng
  const handleClick = (id) => {
    onDelete(id);
  };

  return (
    <div className="todo_data">
      {todoList.map((item) => (
        <div className="todo_item" key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleClick(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoData;
