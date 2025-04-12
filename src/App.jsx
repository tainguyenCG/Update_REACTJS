import { useState } from "react";
import "./App.css";

const MyComponent = () => {
  return <h1>Bài học mới của tôi</h1>;
};// gọi nó ra tại vị trí khác = cách  <MyComponent></MyComponent> hoặc <MyComponent/>

// function App() {
const App = () => {
  //arrow functiont cú pháp là const Ten () => {} lưu ý tên phải viết hoa chữ cái đầu
  const [count, setCount] = useState(0);

  return (
    <>
      
      <h1>hello word </h1>
      <MyComponent></MyComponent>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default App;
