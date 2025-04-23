
import "./App.css";
import MyComponent from "./components/learn/MyComponent";
import {SecondComponent, ThirdComponent} from "./components/learn/SecondComponent";



// function App() {
const App = () => {
  //arrow functiont cú pháp là const Ten () => {} lưu ý tên phải viết hoa chữ cái đầu


  return (
    <>
      
      <h1>hello word </h1>


      <MyComponent/>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>


      
    </>
  );
};

export default App;
