import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Table } from "antd";
import UpdateUserModal from "./update.modal.user";
import { useState } from "react";
import ViewUserDetail from "./view.user.detail";
import { deleteUserAPI } from "../../services/api.service";

const UserTable = (props) => {
  const { dataUser, loadUser } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);

  const [dataDetail, setDataDetail] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleDeleteUser = async (id) => {
    try {
      const res = await deleteUserAPI(id);
      if (res.data) {
        notification.success({
          message: "Delete User",
          description: "Xoá user thành công!",
        });
        loadUser(); // reload lại bảng user
      } else {
        notification.error({
          message: "Delete User",
          description: res.message || "Xoá user thất bại!",
        });
      }
    } catch (error) {
      notification.error({
        message: "Delete User",
        description: error.message || "Đã có lỗi xảy ra khi xoá user!",
      });
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => (
        <a
          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
          onClick={() => {
            setDataDetail(record);
            setIsDetailOpen(true);
          }}
        >
          {record._id}
        </a>
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

          <Popconfirm
            title="Delete User"
            description="Are you sure to Delete User?"
            onConfirm={() => {
              handleDeleteUser(record._id);
            }}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
          </Popconfirm>
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

      <ViewUserDetail
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
      />
    </div>
  );
};
export default UserTable;
