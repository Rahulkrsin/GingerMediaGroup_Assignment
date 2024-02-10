import axios from "axios";

const API_URL = "/v1/api/signup";

const register = async (userData) => {
  const response = await axios.post(
    "https://ginger-media.onrender.com/api/v1/user/register",
    userData
  );
  if (response.data.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }
  return response.data.data;
};
const login = async (userData) => {
  const response = await axios.post(
    "https://ginger-media.onrender.com/api/v1/user/login",
    userData
  );
  if (response.data.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }
  return response.data.data;
};
const update = async (userData) => {
  const response = await axios.patch(
    "https://ginger-media.onrender.com/api/v1/user",
    userData
  );
  console.log(response);
  if (response.data.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }
  return response.data.data;
};
const logout = () => {
  localStorage.removeItem("user");
};

const serviceAuth = {
  register,
  login,
  logout,
  update,
};

export default serviceAuth;
