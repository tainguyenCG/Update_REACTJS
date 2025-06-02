import { Table } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    console.log("bắt đầu");
    const res = await fetchAllUserAPI();
    setDataUser(res.data);
    console.log("in ra", res);
  };

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

  return <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />;
};
export default UserTable;
