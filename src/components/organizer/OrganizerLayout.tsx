import React, { ReactNode } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface OrganizerLayoutProps {
  children: ReactNode;
}

const OrganizerLayout: React.FC<OrganizerLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current path is active
  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? "active" : "";
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    toast.success("Logged out successfully!"); // <-- show toast
    navigate("/login");
  };

  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <h2>Organizer Panel</h2>
        </div>
        <nav className="admin-nav">
          <ul>
            <li className={isActive("/organizer/dashboard")}>
              <Link to="/organizer/dashboard">Dashboard</Link>
            </li>
            <li className={isActive("/organizer/users")}>
              <Link to="/organizer/users">Users</Link>
            </li>
            <li className={isActive("/organizer/events")}>
              <Link to="/organizer/events">Events</Link>
            </li>
            <li className={isActive("/organizer/contacts")}>
              <Link to="/organizer/contacts">Contact Messages</Link>
            </li>
            <li className={isActive("/organizer/subscribers")}>
              <Link to="/organizer/subscribers">Subscribers</Link>
            </li>
            <li className={isActive("/organizer/settings")}>
              <Link to="/organizer/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="admin-content">
        <header className="admin-header">
          <div className="admin-search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="admin-user-menu">
            <div className="admin-user-info">
              <span>Organizer User</span>
            </div>
            <div className="admin-logout">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </header>
        <main className="admin-main">{children}</main>
      </div>
    </div>
  );
};

export default OrganizerLayout;
