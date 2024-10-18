import axiosInstance from "@/api/axiosInstance";

export async function registerService(formData) {
  const { data } = axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });
  return data;
}
