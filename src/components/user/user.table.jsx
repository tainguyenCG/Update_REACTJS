import { Table } from "antd";

const UserTable = (props) => {
  const { dataUser } = props;

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
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
    </div>
  );
};
export default UserTable;
