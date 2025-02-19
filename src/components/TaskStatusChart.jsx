import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const taskData = [
  { name: "Not Yet Started", value: 0, color: "#FFBB28" },
  { name: "Delayed", value: 0, color: "#FF4444" },
  { name: "In Progress", value: 0, color: "#0088FE" },
  { name: "Completed", value: 1, color: "#00C49F" },
];

export default function TaskStatusChart() {
  // Check if all values are 0 (to handle empty charts)
  const hasData = taskData.some((task) => task.value > 0);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Task Status Overview</h2>

      {hasData ? (
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={taskData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {taskData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-500">No tasks available</p>
      )}
    </div>
  );
}
