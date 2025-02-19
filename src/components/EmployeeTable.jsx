import { useState } from "react";

const employees = [
  {
    id: 1,
    name: "John Doe",
    attendance: "Present",
    location: "New York",
    isNew: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    attendance: "Absent",
    location: "Los Angeles",
    isNew: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    attendance: "Present",
    location: "Chicago",
    isNew: true,
  },
  {
    id: 4,
    name: "Michael Brown",
    attendance: "Late",
    location: "San Francisco",
    isNew: false,
  },
  {
    id: 5,
    name: "Emily Davis",
    attendance: "Present",
    location: "Seattle",
    isNew: true,
  },
];

export default function EmployeeTable() {
  const [filter, setFilter] = useState("All"); // Toggle between 'All' and 'New'
  const [search, setSearch] = useState(""); // Search filter

  // Filter employees based on selected toggle and search query
  const filteredEmployees = employees.filter(
    (emp) =>
      (filter === "All" || emp.isNew) &&
      emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow rounded-lg ">
      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <button
            className={`px-4 py-2 rounded-lg ${
              filter === "All" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              filter === "New" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("New")}
          >
            New
          </button>
        </div>
        <input
          type="text"
          placeholder="Search Employee..."
          className="p-2 border rounded-lg w-full md:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Employee Attendance</th>
              <th className="p-3 border">Last Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp) => (
                <tr key={emp.id} className="text-center border">
                  <td className="p-3 border">{emp.name}</td>
                  <td className="p-3 border">{emp.attendance}</td>
                  <td className="p-3 border">{emp.location}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-3 text-center text-gray-500">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
