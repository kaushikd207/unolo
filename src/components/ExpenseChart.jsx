import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const expenseData = {
  January: [
    { name: "Pending", value: 38, color: "#FFBB28" },
    { name: "Approved", value: 38, color: "#82CA9D" },
    { name: "Rejected", value: 2, color: "#FF4444" },
    { name: "Paid Out", value: 3, color: "#8884D8" },
  ],
  February: [
    { name: "Pending", value: 25.03, color: "#FFBB28" },
    { name: "Approved", value: 23.03, color: "#82CA9D" },
    { name: "Rejected", value: 4, color: "#FF4444" },
    { name: "Paid Out", value: 5, color: "#8884D8" },
  ],
  March: [
    { name: "Pending", value: 12.23, color: "#FFBB28" },
    { name: "Approved", value: 15.03, color: "#82CA9D" },
    { name: "Rejected", value: 6, color: "#FF4444" },
    { name: "Paid Out", value: 8, color: "#8884D8" },
  ],
};

export default function ExpenseChart() {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const data = expenseData[selectedMonth];

  const totalExpense = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Expense Summary</h2>
        <select
          className="border p-2 rounded-md"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {Object.keys(expenseData).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="text-gray-700 font-medium mb-4 flex">
        <p>Total Expense: ₹{Math.ceil(totalExpense)}</p>
        <p>Pending: ₹{data[0].value}</p>
        <p>Approved: ₹{data[1].value}</p>
        <p>Rejected: ₹{data[2].value}</p>
        <p>Paid Out: ₹{data[3].value}</p>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
