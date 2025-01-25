import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

export class AxiosAdapter implements HttpAdapter {
  private readonly axiosInstance: AxiosInstance;

  constructor(urlForBase: string) {
    this.axiosInstance = axios.create({
      baseURL: urlForBase,
    });
  }

  async get<T>(
    url: string,
    options?: Record<string, unknown> | undefined
  ): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get(url, options);

      return data;
    } catch (error) {
      throw new Error("Error al realizar la solicitud");
    }
  }
}
