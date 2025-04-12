import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";

const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout>
      <div className="admin-dashboard">
        <h1>Dashboard</h1>

        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <div className="stat-number">1,245</div>
            <div className="stat-change positive">+12% from last month</div>
          </div>

          <div className="stat-card">
            <h3>Active Events</h3>
            <div className="stat-number">32</div>
            <div className="stat-change positive">+5% from last month</div>
          </div>

          <div className="stat-card">
            <h3>New Messages</h3>
            <div className="stat-number">18</div>
            <div className="stat-change negative">-3% from last month</div>
          </div>

          <div className="stat-card">
            <h3>Total Subscribers</h3>
            <div className="stat-number">854</div>
            <div className="stat-change positive">+9% from last month</div>
          </div>
        </div>

        <div className="dashboard-recent">
          <div className="recent-section">
            <h2>Recent Users</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Joined</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ahmed Hassan</td>
                  <td>ahmed@example.com</td>
                  <td>Apr 10, 2025</td>
                  <td>
                    <span className="badge active">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>Fatima El Alaoui</td>
                  <td>fatima@example.com</td>
                  <td>Apr 9, 2025</td>
                  <td>
                    <span className="badge active">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>Mohammed Berrada</td>
                  <td>mohammed@example.com</td>
                  <td>Apr 8, 2025</td>
                  <td>
                    <span className="badge inactive">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="recent-section">
            <h2>Recent Events</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Attendees</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Moroccan Culture Festival</td>
                  <td>Apr 20, 2025</td>
                  <td>45/100</td>
                  <td>
                    <span className="badge active">Upcoming</span>
                  </td>
                </tr>
                <tr>
                  <td>Tech Conference Marrakech</td>
                  <td>Apr 15, 2025</td>
                  <td>120/150</td>
                  <td>
                    <span className="badge active">Upcoming</span>
                  </td>
                </tr>
                <tr>
                  <td>Photography Workshop</td>
                  <td>Apr 5, 2025</td>
                  <td>30/30</td>
                  <td>
                    <span className="badge completed">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
