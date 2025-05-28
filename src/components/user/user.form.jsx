import { Input, Button } from "antd";

const UserForm = () => {
  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "4px",
  };

  const inputContainerStyle = {
    marginBottom: "16px",
  };

  const formStyle = {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 6px 30px rgba(0, 123, 255, 0.2)",
  };

  return (
    <div style={formStyle}>
      <div style={inputContainerStyle}>
        <span style={labelStyle}>Full Name</span>
        <Input />
      </div>
      <div style={inputContainerStyle}>
        <span style={labelStyle}>Email</span>
        <Input />
      </div>
      <div style={inputContainerStyle}>
        <span style={labelStyle}>PassWord</span>
        <Input.Password />
      </div>
      <div style={inputContainerStyle}>
        <span style={labelStyle}>Phone</span>
        <Input />
      </div>
      <div style={{ textAlign: "right" }}>
        <Button type="primary">Create User</Button>
      </div>
    </div>
  );
};

export default UserForm;
