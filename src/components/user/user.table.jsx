import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import UpdateUserModal from "./update.modal.user";
import { useState } from "react";

const UserTable = (props) => {
  const { dataUser, loadUser } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => (
        <>
          <a>{record._id}</a>
        </>
      ),
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (avatar) => (
        <img
          src={`${import.meta.env.VITE_BE_URL}/images/avatar/${avatar}`}
          alt="avatar"
          style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              setIsModalUpdateOpen(true);
            }}
            style={{ color: "orange", cursor: "pointer" }}
          />
          <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        margin: "10px 0",
        padding: "15px 30px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />

      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
    </div>
  );
};
export default UserTable;
