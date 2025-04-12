import { LoginData } from "../../types/auth.types";
import apiClient from "../client";

export const login = (data: LoginData) =>
  apiClient.post("/auth/login/", data).then((res) => res.data);
