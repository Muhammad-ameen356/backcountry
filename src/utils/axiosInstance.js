import axios from "axios";

const baseURL = "https://www.backcountry.com/api";
const imgURL = "https://www.backcountry.com";

const axiosInstance = axios.create({
  baseURL,
});

// axiosInstance.interceptors.request.use(
//   (request) => {
//     // Object.assign(request.headers, {jwt: "abcasasasasasas"})
//     console.log("request interceptor", request);
//     return request;
//   },
//   (err) => {
//     console.log("request interceptor error", err);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Object.assign(response.data.products, [{data: "abc"}])
//     console.log("response interceptor", response);
//     return response;
//   },
//   (err) => {
//     console.log("response interceptor error", err);
//   }
// );

export { imgURL };
export default axiosInstance;
