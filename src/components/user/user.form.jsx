import { Input, Button, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "Create User",
        description: "Tạo User thành công",
      });
    } else {
      notification.error({
        message: "Error User",
        description: JSON.stringify(res.message),
      });
    }
  };

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
        <Input
          placeholder="Họ và tên"
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
      </div>

      <div style={inputContainerStyle}>
        <span style={labelStyle}>Email</span>
        <Input
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>

      <div style={inputContainerStyle}>
        <span style={labelStyle}>PassWord</span>
        <Input.Password
          placeholder="Mật khẩu"
          value={password}
          onChange={(event) => {
            setPassWord(event.target.value);
          }}
        />
      </div>

      <div style={inputContainerStyle}>
        <span style={labelStyle}>Phone</span>
        <Input
          placeholder="Số điện thoại"
          value={phone}
          onChange={(event) => {
            const onlyNumbers = event.target.value.replace(/\D/g, ""); // loại bỏ mọi ký tự không phải số
            setPhone(onlyNumbers);
          }}
        />
      </div>

      <div style={{ textAlign: "right" }}>
        <Button onClick={handleClickBtn} type="primary">
          Create User
        </Button>
      </div>
    </div>
  );
};

export default UserForm;
