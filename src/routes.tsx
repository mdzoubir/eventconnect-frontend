import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail.tsx";
import Login from "./pages/Login.tsx";
import Events from "./pages/Events.tsx";
import Contact from "./pages/Contact.tsx";
import Register from "./pages/Register.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { Toaster } from "react-hot-toast";

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

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
