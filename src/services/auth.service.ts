import { fetchAPI } from "../utils/fetch";
import { evirontment } from "../constants/evirontment";
import type { ILogin } from "../types/auth";

export const login = async (payload: ILogin) => {
  const result = await fetchAPI(`${evirontment.API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return result;
};
