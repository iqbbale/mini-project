import { evirontment } from "../constants/evirontment";
import { fetchAPI } from "../utils/fetch";

export const getMenus = async (category?: string) => {
  let url = `${evirontment.API_URL}/menu?page=1&pageSize=25`;

  if (category) {
    url += `&category=${category}`;
  }
  const result = await fetchAPI(url, {
    method: "GET",
    // karena dia public dia ga butuh headers cukup get
  }).then((data) => data);
  return result;
};
