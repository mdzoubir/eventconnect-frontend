import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  const location = useLocation();

  // Check if the current path is active
  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? "active" : "";
  };

  return (
    <div className="user-layout">
      <div className="user-sidebar">
        <div className="user-profile">
          <div className="user-avatar">
            <img src="/api/placeholder/64/64" alt="User Avatar" />
          </div>
          <h3>User Name</h3>
        </div>
        <nav className="user-nav">
          <ul>
            <li className={isActive("/user/dashboard")}>
              <Link to="/user/dashboard">My Dashboard</Link>
            </li>
            <li className={isActive("/user/profile")}>
              <Link to="/user/profile">Profile</Link>
            </li>
            <li className={isActive("/user/events")}>
              <Link to="/user/events">My Events</Link>
            </li>
            <li className={isActive("/user/notifications")}>
              <Link to="/user/notifications">Notifications</Link>
            </li>
            <li className={isActive("/user/settings")}>
              <Link to="/user/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <div className="user-logout">
          <Link to="/logout">Logout</Link>
        </div>
      </div>
      <div className="user-content">
        <header className="user-header">
          <h1>User Dashboard</h1>
        </header>
        <main className="user-main">{children}</main>
      </div>
    </div>
  );
};

export default UserLayout;
