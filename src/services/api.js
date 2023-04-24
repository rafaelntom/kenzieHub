import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 5000,
});

const userToken = localStorage.getItem("@kenzieHubToken") || "";

export const apiWithToken = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${userToken}`,
  },
});
