import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiConfig } from "../../config";

interface ServerData {
  [key: string]: Request;
}

export interface IHttpService {
  get: <T>(url: string) => Promise<AxiosResponse<T>>;
  post: <T>(url: string, data: ServerData) => Promise<AxiosResponse<T>>;
  put: <T>(url: string, data: ServerData) => Promise<AxiosResponse<T>>;
  delete: <T>(url: string) => Promise<AxiosResponse<T>>;
  attachHeaders: (headers: AxiosRequestConfig) => void;
  removeHeaders: (headerKeys: string[]) => void;
}

export class HttpService implements IHttpService {
  readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;

    this.client.defaults.headers.post = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    this.client.interceptors.response.use(this.handleSuccessResponse, this.handleErrorResponse);
  }

  public get = <T>(url: string): Promise<AxiosResponse<T>> => {
    return this.client.get<T>(url);
  };

  public post = <T>(url: string, data: ServerData): Promise<AxiosResponse<T>> => {
    return this.client.post<T>(url, data);
  };

  public put = <T>(url: string, data: ServerData): Promise<AxiosResponse<T>> => {
    return this.client.put<T>(url, data);
  };

  public delete = <T>(url: string): Promise<AxiosResponse<T>> => {
    return this.client.delete<T>(url);
  };

  public attachHeaders = (headers: AxiosRequestConfig): void => {
    Object.assign(this.client.defaults.headers, headers);
  };

  public removeHeaders = (headerKeys: string[]): void => {
    // TO FIX:
    // headerKeys.forEach((key) => delete this.client.defaults.headers[key]);
  };

  private handleSuccessResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  private handleErrorResponse = (error: AxiosError): void => {
    if (error.response?.status) {
      switch (error.response.status) {
        case 403:
          throw new ForbiddenError();
        default:
          throw new Error(error.message);
      }
    } else {
      throw error;
    }
  };
}

export class ForbiddenError extends Error {
  constructor(message?: string) {
    super(message);
    if (!message) {
      this.message = "forbidden";
    }
  }
}

const clientConfig: AxiosRequestConfig = {
  baseURL: apiConfig.BASE_URL,
};

const axiosClient = axios.create(clientConfig);
export default new HttpService(axiosClient);
