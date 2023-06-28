import axios from "axios";
import { baseUrl } from "./url.utils";
import { getToken } from "./auth.utils";

const http = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  // headers: {'authorization': getToken() }
});

http.interceptors.request.use(function (config) {
  if (getToken()) {
    config.headers["Authorization"] = getToken();
  }
});

export default http;
