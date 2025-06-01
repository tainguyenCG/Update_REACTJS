import axios from "axios";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BE = "http://localhost:8080/api/v1/user";
    const data = {
      fullName: fullName, //nếu API BE viết full_Name thì cập nhật thành full_Name: fullName
      email: email,
      password: password,
      phone: phone,
    };
    // const data = { fullName, email, password, phone };// key : value giống thì viết như này

   return axios.post(URL_BE, data);
    
}

const updateUserAPI = () =>{

}

export { 
  createUserAPI, updateUserAPI
}