import axios from "axios";

// Const
export const BASE_URL = "https://fiverrnew.cybersoft.edu.vn";
export const tokenCyberSoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MCIsIkhldEhhblN0cmluZyI6IjE0LzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDY0OTYwMDAwMCIsIm5iZiI6MTY2NTY4MDQwMCwiZXhwIjoxNjk0Nzk3MjAwfQ.5RzSzvDq8qA8Kfw0NePg5o7H-ZEqh0_tqOWRhEUSct8";

export const configHeaders = () => {
  return {
    tokenCyberSoft: tokenCyberSoft,
  };
};

// Axios Instance
export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaders(),
});
