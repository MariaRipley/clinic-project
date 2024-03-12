import axios from "axios";

axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export default axios;
