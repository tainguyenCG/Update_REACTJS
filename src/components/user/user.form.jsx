import { Input, Button, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = (props) => {
  const { loadUser } = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [phone, setPhone] = useState("");
  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "Create User",
        description: "Tạo User thành công",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.error({
        message: "Error User",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassWord("");
    setPhone("");
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "4px",
  };

  const inputContainerStyle = {
    marginBottom: "16px",
    width: "calc(100% - 5px)",
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
      <div style={flexbtn}>
        <h3 style={h3css}>Table User</h3>
        <Button
          type="primary"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Create User
        </Button>
      </div>
      <Modal
        title="Create User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={() => {
          handleSubmitBtn();
        }}
        onCancel={() => {
          resetAndCloseModal();
        }}
        maskClosable={false} //tăng trải nghiệp ng dùng, chỉ đóng khi ấn mấy nút chứ click ra bên ngoài nó ko đóng
        okText={"Create"}
      >
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
      </Modal>
    </>
  );
};

export default UserForm;
