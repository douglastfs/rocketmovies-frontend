import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-api-d6p1.onrender.com",
});
