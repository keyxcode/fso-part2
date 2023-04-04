import axios from "axios";
const baseURL = "https://restcountries.com/v3.1";

const getAll = () => {
  const request = axios.get(`${baseURL}/all`);
  return request.then((response) => response.data);
};

export default { getAll };
