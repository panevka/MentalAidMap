import axios from "axios";

const API_URI = import.meta.env.VITE_API_URI;

export const getSupportResources = async () => {
  const endpoint = "support-resources";
  const response = await axios.get(`${API_URI}/${endpoint}`);
  return response.data;
};
