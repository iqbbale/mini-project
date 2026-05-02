import { evirontment } from "../constants/evirontment";
import type { ICard } from "../types/order";
import { fetchAPI } from "../utils/fetch";
import { getLocalStorage } from "../utils/LocalStorage";

export const getOrders = async () => {
  const url = `${evirontment.API_URL}/orders?page=1&pageSize=10`;
  const result = await fetchAPI(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`,
    },
  }).then((data) => data);
  return result;
};

export const getOrderById = async (id: string) => {
  const url = `${evirontment.API_URL}/orders/${id}`;

  const result = await fetchAPI(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`,
    },
  }).then((data) => data);
  return result;
};

export const createOrder = async (payload: {
  customerName: string;
  tableNumber: number;
  cart: ICard[];
}) => {
  const result = await fetchAPI(`${evirontment.API_URL}/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`,
    },
    body: JSON.stringify(payload),
  });
  return result;
};

export const updateOrder = async (id: string, payload: { status: string }) => {
  const result = await fetchAPI(`${evirontment.API_URL}/orders/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`,
    },
    body: JSON.stringify(payload),
  });
  return result;
};
