import axios from "axios";

export default axios.create({
  baseURL: "https://mern-crud-app1.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});