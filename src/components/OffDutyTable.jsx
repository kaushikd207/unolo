import React, { useState } from "react";

const employees = [
  { name: "John Doe", team: "Development", status: "Off Duty", type: "new" },
  { name: "Jane Smith", team: "Marketing", status: "Off Duty", type: "all" },
  { name: "Alice Johnson", team: "Sales", status: "Off Duty", type: "new" },
  { name: "Robert Brown", team: "HR", status: "Off Duty", type: "all" },
];

export default function OffDutyTable() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Filtered Employees
  const filteredEmployees = employees.filter(
    (emp) =>
      (filter === "all" || emp.type === filter) &&
      (emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.team.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Off-Duty Employees</h2>

      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by name or team..."
          className="p-2 border rounded w-full md:w-2/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded w-full md:w-1/3"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="new">New</option>
        </select>
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="p-2 text-left">Employee</th>
              <th className="p-2 text-left">Team Name</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-2">{emp.name}</td>
                  <td className="p-2">{emp.team}</td>
                  <td className="p-2">{emp.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-2 text-center text-gray-500">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
