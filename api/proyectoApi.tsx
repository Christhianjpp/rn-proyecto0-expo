import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseURL = "http://192.168.0.5:8080/api/";

const proyectoApi = axios.create({
  baseURL,
  responseType: "json",
  withCredentials: true,
});

proyectoApi.interceptors.request.use(async (config: any) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers["x-token"] = token;
  }
  return config;
});
export default proyectoApi;

export const proyectoApiRecovery = axios.create({
  baseURL,
  responseType: "json",
  withCredentials: true,
});
