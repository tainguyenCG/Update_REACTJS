import axios from "./axios.customize";

// Tạo mới user
const createUserAPI = (fullName, email, password, phone) => {
  const URL_BE = "/api/v1/user";
  const data = {
    fullName,
    email,
    password,
    phone,
  };
  return axios.post(URL_BE, data);
};

// Lấy danh sách user
const fetchAllUserAPI = (current, pageSize) => {
  const URL_BE = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
  return axios.get(URL_BE);
};

// Cập nhật user (có avatar và email)
const updateUserAPI = (fullName, _id, phone, avatar, email) => {
  const URL_BE = "/api/v1/user";
  const data = {
    _id,
    fullName,
    phone,
    avatar,
    email,
  };
  return axios.put(URL_BE, data);
};

// Xoá user
const deleteUserAPI = (_id) => {
  const URL_BE = `/api/v1/user/${_id}`;
  return axios.delete(URL_BE);
};

// Upload file (avatar)
const handleUploadFile = (file, folder) => {
  const URL_BE = `/api/v1/file/upload`;
  const config = {
    headers: {
      "upload-type": folder,
      "Content-Type": "multipart/form-data",
    },
  };
  const bodyFormData = new FormData();
  bodyFormData.append("fileImg", file);
  return axios.post(URL_BE, bodyFormData, config);
};

export {
  createUserAPI,
  updateUserAPI,
  fetchAllUserAPI,
  deleteUserAPI,
  handleUploadFile,
};
