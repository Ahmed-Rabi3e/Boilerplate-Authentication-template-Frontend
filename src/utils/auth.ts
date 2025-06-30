import axiosInstance from "./axiosInstance";

export const logoutUser = async () => {
  try {
    await axiosInstance.post("/auth/logout");
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Logout Error:", error.response?.data || error.message);
  }
};
