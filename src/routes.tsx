import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/organizer/Dashboard";
import Users from "./pages/organizer/Users";
import { Toaster } from "react-hot-toast";

import MainLayout from "./layouts/MainLayout";
import OrganizerLayout from "./layouts/OrganizerLayout";

// Import CSS
import "./styles/admin.css";
import "./styles/admin-components.css";
import "./styles/user-dashboard.css";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PublicRoute from "./components/auth/PublicRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2500,
          style: {
            fontSize: "18px",
            padding: "16px 24px",
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />

      <Routes>
        {/* Main Layout Pages */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/events"
          element={
            <MainLayout>
              <Events />
            </MainLayout>
          }
        />
        <Route
          path="/events/:id"
          element={
            <MainLayout>
              <EventDetail />
            </MainLayout>
          }
        />
        <Route
          path="/register"
          element={
            <MainLayout>
              <Register />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* Admin Pages */}
        <Route
          path="/organizer/dashboard"
          element={
            <ProtectedRoute>
              <OrganizerLayout>
                <Dashboard />
              </OrganizerLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/organizer/users"
          element={
            <ProtectedRoute>
              <OrganizerLayout>
                <Users />
              </OrganizerLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
