import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const allData = {
  "2024-01": [
    { date: "01 Jan", hours: 8 },
    { date: "02 Jan", hours: 7.5 },
    { date: "03 Jan", hours: 6 },
    { date: "04 Jan", hours: 9 },
    { date: "05 Jan", hours: 8.5 },
  ],
  "2024-02": [
    { date: "01 Feb", hours: 7 },
    { date: "02 Feb", hours: 6.5 },
    { date: "03 Feb", hours: 8.5 },
    { date: "04 Feb", hours: 9 },
    { date: "05 Feb", hours: 7.5 },
  ],
};

export default function WorkingHoursChart() {
  const [selectedMonth, setSelectedMonth] = useState("2024-01");

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">
        Daily Average Working Hours
      </h2>

      {/* Month Filter */}
      <select
        className="mb-4 p-2 border rounded"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {Object.keys(allData).map((month) => (
          <option key={month} value={month}>
            {month.replace("-", " ")}
          </option>
        ))}
      </select>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={allData[selectedMonth]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="hours" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
