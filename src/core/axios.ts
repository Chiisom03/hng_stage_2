import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const currentHost =
  window.location.protocol + "//" + window.location.host;
interface IPostReq {
  body?: object;
  url: string;
  result?: (response: AxiosResponse<unknown, unknown>) => void;
  error?: (err: AxiosError<Record<string, unknown>>) => void;
}

export const postReq = ({ body, url, result, error }: IPostReq) =>
  axios.post(url, body).then(result).catch(error);

// export const baseUrl = "https://api.timbu.cloud";
export const baseUrl = "https://timbu-get-all-products.reavdev.workers.dev";

export const redirectUrl = `${currentHost}`;
export const appPost = ({ body, url, result, error }: IPostReq) =>
  axios
    .post(baseUrl + url, body, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    .then(result)
    .catch(error);

export const appPostRaw = ({ body, url }: IPostReq) =>
  axios.post(baseUrl + url, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  
export const appGet = ({ url, result, error }: IPostReq) =>
  axios
    .get(baseUrl + url, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    .then(result)
    .catch(error);

export const appGetRaw = ({ url }: IPostReq) => {
  console.log(Cookies.get("token"));

  return axios.get(baseUrl + url, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
};

export interface ErrorRes {
  status: boolean;
  message: string;
  data: string;
}

export const handleError = <T>(error: unknown, message?: string) => {
  if (isAxiosError<T>(error)) {
    toast.error((error.response?.data as { message: string }).message);
    return;
  }
  if (typeof error === "string") {
    toast.error(error);
    return;
  }
  if (typeof (error as Error)?.message === "string") {
    toast.error((error as Error)?.message);
    return;
  }

  if ((error as AxiosError).code === 'ERR_NETWORK') {
    toast.error('Please check your internet connection');
    return;
  }

  toast.error(message ?? "Error when proccessing...");
};

const headers = () => ({
  Authorization: `Bearer ${Cookies.get("token")}`,
});

const instance = axios.create({
  baseURL: baseUrl,
});

type HTTPRequestConfig = AxiosRequestConfig;

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(
      url: string,
      config: HTTPRequestConfig = { headers: headers() }
    ) => {
      return axios.get<T>(url, config);
    },
    delete: <T>(
      url: string,
      config: HTTPRequestConfig = { headers: headers() }
    ) => {
      return axios.delete<T>(url, config);
    },
    put: <T>(
      url: string,
      body: unknown,
      config: HTTPRequestConfig = { headers: headers() }
    ) => {
      return axios.put<T>(url, body, config);
    },
    patch: <T>(
      url: string,
      body: unknown,
      config: HTTPRequestConfig = { headers: headers() }
    ) => {
      return axios.patch<T>(url, body, config);
    },
    post: <T>(
      url: string,
      body: unknown,
      config: HTTPRequestConfig = { headers: headers() }
    ) => {
      return axios.post<T>(url, body, config);
    },
  };
};

export const Http = api(instance);
