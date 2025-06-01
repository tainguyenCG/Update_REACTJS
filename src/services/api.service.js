// import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
  const URL_BE = "/api/v1/user";
  const data = {
    fullName: fullName, //nếu API BE viết full_Name thì cập nhật thành full_Name: fullName
    email: email,
    password: password,
    phone: phone,
  };
  // const data = { fullName, email, password, phone };// key : value giống thì viết như này

  return axios.post(URL_BE, data);
};

const updateUserAPI = () => {};

const fetchAllUserAPI = () => {
  const URL_BE = "/api/v1/user"; 
  return axios.get(URL_BE);
};

export { createUserAPI, updateUserAPI, fetchAllUserAPI };
