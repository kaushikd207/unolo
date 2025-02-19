import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Punched In", value: 3, color: "#4CAF50" },
  { name: "Punched Out", value: 6, color: "#F44336" },
];

export default function StatsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* First Card - Pie Chart */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Real Time Status</h3>
        <PieChart width={160} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Second Card - Two Sections (Stacked) */}
      <div className="bg-white shadow-md p-6 rounded-lg flex flex-col gap-4">
        {/* Top Section - Punched In Status */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Punched In Status(Inactive)</h3>
          <p className="text-gray-600">{data[1].value - data[0].value}</p>
        </div>

        {/* Bottom Section - Strength */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Staffing Strength</h3>
          <p className="text-gray-600">0/0</p>
        </div>
      </div>
    </div>
  );
}
