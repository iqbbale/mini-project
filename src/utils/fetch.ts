export const fetchAPI = async (url: string, options: RequestInit) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options
});
  const data = await response.json();
  if (!response.ok) {
    // Kamu bisa throw error di sini agar bisa ditangkap di block catch
    throw new Error(data.error || "Something went wrong");
  }
  return data;
};
