import React, { useState } from "react";
import AdminLayout from "../../components/organizer/OrganizerLayout";
import useFetchUsers from "../../hooks/useFetchUsers";
import { deleteUser } from "../../api/endpoints/userApi";
import toast from "react-hot-toast";
import { User } from "../../types/api.types";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Use the users fetched by the custom hook
  const { users: fetchedUsers, loading } = useFetchUsers();

  // Update local users state when fetchedUsers change
  React.useEffect(() => {
    setUsers(fetchedUsers);
  }, [fetchedUsers]);

  // Filter users based on search term and status filter
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || user.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleDeleteUser = async (userId: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(userId);

        // Remove the deleted user from the local state directly
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));

        // Show success toast
        toast.success("User deleted successfully!");
      } catch (error) {
        console.error("Failed to delete user", error);
        toast.error("Failed to delete user.");
      }
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
                <th>Preferences</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr className="text-center">
                  <td colSpan={5}>Loading users...</td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr className="text-center">
                  <td colSpan={5}>No Users found...</td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {Array.isArray(user.preferences) &&
                      user.preferences.length > 0 ? (
                        user.preferences.map((pref, index) => (
                          <span key={index} className="badge active ml-1">
                            {pref}
                          </span>
                        ))
                      ) : (
                        <span className="badge inactive">No preferences</span>
                      )}
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
