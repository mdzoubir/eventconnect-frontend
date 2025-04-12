import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import { Toaster } from "react-hot-toast";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Import CSS
import "./styles/admin.css";
import "./styles/admin-components.css";
import "./styles/user-dashboard.css";

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

        <Route path="/login" element={<LoginPage />} />

        {/* Admin Pages */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminLayout>
              <Users />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
