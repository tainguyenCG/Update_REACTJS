const MyComponent = () => {
  const DaylaFragment = "Fragment để bọc tất cả phần tử, gọi là mảnh vỡ ";
  return (
    <>
      <h1>Bài học mới của tôi</h1>
      <h1>{DaylaFragment}</h1>
      {/* có thể chuyển chuỗi, mảng, oject bằng cách 
            {JSON.stringify(DaylaFragment)}
        */}
    </>
  );
}; // gọi nó ra tại vị trí khác = cách  <MyComponent></MyComponent> hoặc <MyComponent/>

export default MyComponent;
