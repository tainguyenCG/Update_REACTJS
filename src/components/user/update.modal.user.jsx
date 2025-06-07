import { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  //modal
  const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;
  // next dataUpdate != prev dataUpdate
  useEffect(() => {
    if (dataUpdate) {
      setFullName(dataUpdate.fullName);
      setId(dataUpdate._id);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);

  const handleSubmitBtn = async () => {
    const res = await updateUserAPI(fullName, id, phone);
    if (res.data) {
      notification.success({
        message: "Update User",
        description: "Cập nhật User thành công",
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
    setIsModalUpdateOpen(false);
    setFullName("");
    setId("");
    setPhone("");
    setDataUpdate(null);
  };

  //css
  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "4px",
  };

  const inputContainerStyle = {
    marginBottom: "16px",
    width: "calc(100% - 5px)",
  };
  return (
    <Modal
      title="Update User"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalUpdateOpen}
      onOk={() => {
        handleSubmitBtn();
      }}
      onCancel={() => {
        resetAndCloseModal();
      }}
      maskClosable={false} //tăng trải nghiệp ng dùng, chỉ đóng khi ấn mấy nút chứ click ra bên ngoài nó ko đóng
      okText={"Save"}
    >
      <div style={inputContainerStyle}>
        <span style={labelStyle}>ID</span>
        <Input placeholder="id" value={id} disabled />
      </div>

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
  );
};
export default UpdateUserModal;
