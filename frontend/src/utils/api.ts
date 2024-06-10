import apiClient from "./apiClient";
import routes from "../routes";
import { LoginFormType } from "../pages/LoginPage";

const errosStatus = [400, 401, 500];

export const signup = async (formData: FormData) => {
  const res = await apiClient.post(`${routes.api.signup}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  if (errosStatus.includes(res.status)) throw new Error(res.data);

  return res.data;
};

export const activateAccount = async (token: string) => {
  const res = await apiClient.post(
    `${routes.api.activateAccount}`,
    {
      activation_token: token,
    },
    { withCredentials: true }
  );

  if (errosStatus.includes(res.status)) throw new Error(res.data);

  return res.data;
};

export const signin = async (formData: LoginFormType) => {
  const res = await apiClient.post(`${routes.api.login}`, formData, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

  if (errosStatus.includes(res.status)) throw new Error(res.data);

  return res.data;
};

export const validateToken = async () => {
  const res = await apiClient.get(`${routes.api.validateToken}`, {
    withCredentials: true,
  });

  if (errosStatus.includes(res.status)) throw new Error(res.data);

  return res.data;
};
