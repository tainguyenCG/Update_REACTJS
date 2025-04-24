const TodoData = ({ name, age, data }) => { //cách 1
// const TodoData = (props) => {
//     const { name, age, data } = props; // cách 2
 
    return (
      <>
        <div className="todo_data">
          <div>My name is {name}</div>
          <div>Age: {age}</div>
          <div>Address: {data.address}</div>
          <div>Country: {data.country}</div>
          <div>Learning React</div>
        </div>
      </>
    );
  };
  
  export default TodoData;
  