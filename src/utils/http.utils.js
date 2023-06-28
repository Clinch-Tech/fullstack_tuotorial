import axios from "axios";
import { baseUrl } from "./url.utils";
import { getToken } from "./auth.utils";

const http = axios.create({
  baseURL: `http://localhost:8080`,
  timeout: 10000,
  // headers: {'authorization': getToken() }
});

http.interceptors.request.use(function (config) {
  if (getToken()) {
    config.headers["Authorization"] = getToken();
  }
  return config;
});

export default http;
