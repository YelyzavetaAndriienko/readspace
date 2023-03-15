import axios from "axios";
const customHeaders = {
  'content-type' : 'application/json'
}
export default axios.create({
  baseURL: "http://localhost:3001",
}, customHeaders);