import { User } from "../../types/api.types";
import apiClient from "../client";

// Get users with the role "user"
export const getUsers = (): Promise<User[]> => {
  const token = localStorage.getItem("accessToken");
  console.log("Token:", token);

  if (!token) {
    console.error("No token found in localStorage");
    return Promise.reject("No token found");
  }

  return apiClient
    .get("/users?role=user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Failed to fetch users:", error.response || error);
      throw error;
    });
};

// Delete user by ID
export const deleteUser = async (userId: number): Promise<void> => {
  const token = localStorage.getItem("accessToken");

  try {
    await apiClient.delete(`/users/${userId}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("User deleted successfully");
  } catch (error) {
    console.error("Failed to delete user", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
