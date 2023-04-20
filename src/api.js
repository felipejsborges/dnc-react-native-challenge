import axios from "axios";

// @ts-ignore
const API_URL = "http://SEU_IP:3000";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export async function getTransactions() {
  const { data } = await axiosInstance.get("transactions");

  return data;
}

export async function getTransaction(id) {
  const { data } = await axiosInstance.get(`transactions/${id}`);

  return data;
}

export async function createTransaction(transaction) {
  const { data } = await axiosInstance.post("transactions", transaction);

  return data;
}

export async function updateTransaction(id, transaction) {
  const { data } = await axiosInstance.put(`transactions/${id}`, transaction);

  return data;
}

export async function deleteTransaction(id) {
  await axiosInstance.delete(`transactions/${id}`);
}
