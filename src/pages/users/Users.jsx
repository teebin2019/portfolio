import { useState, useEffect } from "react";
import { NavLink } from "react-router";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users");
      const result = await response.json();
      console.log(result);
      setUsers(result.users);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch("http://localhost:8080/api/users/" + id, {
        method: "DELETE",
      });
      const result = await response.json();
      console.log(result);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg ">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ชื่อ-นามสกุล
                </th>
                <th scope="col" className="px-6 py-3">
                  อีเมล
                </th>
                <th scope="col" className="px-6 py-3">
                  การดำเนินการ
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr
                    className="bg-white border-b   border-gray-200"
                    key={user.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {user.first_name} {user.last_name}
                    </th>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4 ">
                      <NavLink
                        to={`/dashboard/users/${user.id}/edit`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline me-3"
                      >
                        Edit
                      </NavLink>
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => handleDelete(user.id)}
                      >
                        Del
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-white border-b   border-gray-200">
                  <td className="px-6 py-4 text-center " colSpan="3">
                    ไม่มีข้อมูล
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
