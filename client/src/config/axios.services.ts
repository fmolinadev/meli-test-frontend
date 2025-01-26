import axios from "axios";
import { createAxiosInstance } from "./axios.create.instance";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const axiosInstance = createAxiosInstance(BASE_URL);

export const axiosService = {
  async get({ path, signal }: { path: string; signal?: AbortSignal }) {
    try {
      return await axiosInstance.get(path, { signal });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message) {
          throw new Error(error.response.data.message);
        }
        throw new Error("Error en la solicitud de Axios");
      } else if (error instanceof Error) {
        throw new Error(`Request failed: ${error.message}`);
      }
      throw new Error("Error desconocido");
    }
  },
};
