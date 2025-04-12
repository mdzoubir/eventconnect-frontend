import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Check if the current path is active
  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'active' : '';
  };

  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <h2>Admin Panel</h2>
        </div>
        <nav className="admin-nav">
          <ul>
            <li className={isActive('/admin/dashboard')}>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li className={isActive('/admin/users')}>
              <Link to="/admin/users">Users</Link>
            </li>
            <li className={isActive('/admin/events')}>
              <Link to="/admin/events">Events</Link>
            </li>
            <li className={isActive('/admin/contacts')}>
              <Link to="/admin/contacts">Contact Messages</Link>
            </li>
            <li className={isActive('/admin/subscribers')}>
              <Link to="/admin/subscribers">Subscribers</Link>
            </li>
            <li className={isActive('/admin/settings')}>
              <Link to="/admin/settings">Settings</Link>
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
              <span>Admin User</span>
            </div>
            <div className="admin-logout">
              <button>Logout</button>
            </div>
          </div>
        </header>
        <main className="admin-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;