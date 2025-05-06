import { useState, useEffect } from "react";
import { getUsers } from "../api/endpoints/userApi";
import { format, parseISO } from "date-fns";
import { User } from "../types/api.types";

// Extend your User type to include formatted fields
interface FormattedUser extends User {
  joinDate: string;
  name: string;
  email: string;
}

const useFetchUsers = () => {
  const [users, setUsers] = useState<FormattedUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getUsers();

        // Transform the data as it comes in
        const formattedUsers = data.map((user: User) => ({
          ...user,
          // Format date consistently
          joinDate: formatDate(user.date_joined),
          // Create full name from first/last name
          name: formatName(user),
        }));

        setUsers(formattedUsers);
      } catch (error) {
        console.error("Failed to fetch users", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { users, loading };
};

// Helper functions
const formatDate = (dateString?: string): string => {
  if (!dateString) return "-";

  try {
    const date = parseISO(dateString);
    return format(date, "MMM d, yyyy");
  } catch {
    return "-";
  }
};

const formatName = (user: User): string => {
  const hasFirstName =
    typeof user.first_name === "string" && user.first_name.trim() !== "";
  const hasLastName =
    typeof user.last_name === "string" && user.last_name.trim() !== "";

  if (hasFirstName || hasLastName) {
    const first_name = hasFirstName
      ? user.first_name!.charAt(0).toUpperCase() + user.first_name!.slice(1)
      : "";
    const last_name = hasLastName ? user.last_name!.toUpperCase() : "";

    return `${last_name} ${first_name}`.trim();
  }

  return user.username;
};


export default useFetchUsers;