import apiClient from "./apiClient";
import routes from "../routes";
import { LoginFormType } from "../pages/LoginPage";

const BAD_REQUEST: number = 400;
const INTERNAL_SERVER_ERROR: number = 500;

export const signUp = async (formData: FormData) => {
  const res = await apiClient.post(`${routes.api.register}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });

  if (res.status === BAD_REQUEST || res.status === INTERNAL_SERVER_ERROR)
    throw new Error(res.data);

  return res.data;
};

export const activateAccount = async (token: string) => {
  const res = await apiClient.post(`${routes.api.activateAccount}`, {
    activation_token: token,
  });

  if (res.status === BAD_REQUEST || res.status === INTERNAL_SERVER_ERROR)
    throw new Error(res.data);

  return res.data;
};

export const signin = async (formData: LoginFormType) => {
  const res = await apiClient.post(`${routes.api.login}`, formData, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

  if (res.status === BAD_REQUEST || res.status === INTERNAL_SERVER_ERROR)
    throw new Error(res.data);

  return res.data;
};
