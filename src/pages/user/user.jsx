import UserForm from "../../components/user/user.form";
import UserTable from "../../components/user/user.table";
import { fetchAllUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserPage = () => {
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
  return (
    <>
      <div style={{ paddingTop: "90px" }}>
        <UserForm loadUser={loadUser} />
        <UserTable dataUser={dataUser} loadUser={loadUser}/>
      </div>
    </>
  );
};
export default UserPage;
