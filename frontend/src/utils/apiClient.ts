import axios from "axios";

export const BACKEND_URL = "http://localhost:8000";

export default axios.create({
  baseURL: BACKEND_URL,
});
