import { Input, Button, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [phone, setPhone] = useState("");
  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
    width: "calc(100% - 15px)",
  };

  const formStyle = {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 6px 30px rgba(0, 123, 255, 0.2)",
  };

  const h3css = {
    textAlign: "left",
    marginLeft: "24px",
    marginBottom: "16px",
    fontWeight: "600",
    fontSize: "20px",
  };

  const flexbtn = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px",
    marginBottom: "16px",
    padding: "0 24px",
  };

  return (
    <>
      {/* <div style={formStyle}>
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
      </div> */}
      <div style={flexbtn}>
        <h3 style={h3css}>Table User</h3>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
      </div>
      <Modal
        title=""
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
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
      </Modal>
    </>
  );
};

export default UserForm;
