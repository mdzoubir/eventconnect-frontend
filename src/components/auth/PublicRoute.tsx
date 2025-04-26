// src/components/auth/PublicRoute.tsx
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    try {
      const decodedToken: any = jwtDecode(accessToken);
      const userRole = decodedToken.role;

      // Redirect based on role (optional: customize if you have multiple roles)
      if (userRole === "organizer") {
        return <Navigate to="/organizer/dashboard" replace />;
      } else if (userRole === "admin") {
        return <Navigate to="/admin/dashboard" replace />;
      } else {
        return <Navigate to="/" replace />;
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  return <>{children}</>;
};

export default PublicRoute;
