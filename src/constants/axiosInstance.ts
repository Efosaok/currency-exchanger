import axios from "axios";
import { PROXY_API_BASE_URL } from "./FETCH";

const axiosInstance = axios.create({
  baseURL: PROXY_API_BASE_URL,
});

export default axiosInstance;
