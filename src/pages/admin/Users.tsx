// src/pages/admin/Users.tsx
import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

// Mock data - replace with API calls
const mockUsers = [
  { id: 1, name: 'Ahmed Hassan', email: 'ahmed@example.com', role: 'User', status: 'Active', joinDate: 'Apr 10, 2025' },
  { id: 2, name: 'Fatima El Alaoui', email: 'fatima@example.com', role: 'Admin', status: 'Active', joinDate: 'Apr 9, 2025' },
  { id: 3, name: 'Mohammed Berrada', email: 'mohammed@example.com', role: 'User', status: 'Pending', joinDate: 'Apr 8, 2025' },
  { id: 4, name: 'Leila Bouaziz', email: 'leila@example.com', role: 'User', status: 'Active', joinDate: 'Apr 7, 2025' },
  { id: 5, name: 'Karim Chaoui', email: 'karim@example.com', role: 'User', status: 'Inactive', joinDate: 'Apr 6, 2025' },
];

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Filter users based on search term and status filter
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || user.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Handle user deletion
  const handleDeleteUser = (id: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="admin-users">
        <div className="page-header">
          <h1>Users Management</h1>
          <button className="btn btn-primary">Add New User</button>
        </div>

        <div className="filters">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search users..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="status-filter">
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="users-table">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <span className={`badge ${user.status.toLowerCase()}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>{user.joinDate}</td>
                    <td className="actions">
                      <button className="btn btn-sm btn-edit">Edit</button>
                      <button 
                        className="btn btn-sm btn-delete"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="no-data">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button className="btn-page">&laquo;</button>
          <button className="btn-page active">1</button>
          <button className="btn-page">2</button>
          <button className="btn-page">3</button>
          <button className="btn-page">&raquo;</button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UsersPage;