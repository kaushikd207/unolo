import { useState } from "react";
import {
  FaTachometerAlt,
  FaCalendarCheck,
  FaRegCalendarMinus,
  FaBuilding,
  FaTasks,
  FaMapMarkedAlt,
  FaBullseye,
  FaWpforms,
  FaShoppingCart,
  FaMoneyBillWave,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";
import Dashboard from "./Dashboard";

const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt /> },
  { name: "Attendance", icon: <FaCalendarCheck /> },
  { name: "Leaves", icon: <FaRegCalendarMinus /> },
  { name: "Organization", icon: <FaBuilding /> },
  { name: "Task", icon: <FaTasks /> },
  { name: "Beat", icon: <FaMapMarkedAlt /> },
  { name: "Target", icon: <FaBullseye /> },
  { name: "Forms", icon: <FaWpforms /> },
  { name: "Order", icon: <FaShoppingCart /> },
  { name: "Expenses", icon: <FaMoneyBillWave /> },
  { name: "Clients & Sites", icon: <FaUsers /> },
  { name: "Reports", icon: <FaChartBar /> },
];

export default function Sidebar() {
  const [selected, setSelected] = useState("Dashboard");
  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-900 text-white p-4 md:block hidden">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center gap-3 p-2 mb-2 cursor-pointer rounded-lg hover:bg-gray-700 ${
                selected === item.name ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelected(item.name)}
            >
              {item.icon} {item.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile Sidebar */}
      <div className="w-full bg-gray-900 text-white p-4 md:hidden flex overflow-x-auto space-x-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`p-2 rounded-lg hover:bg-gray-700 ${
              selected === item.name ? "bg-gray-700" : ""
            }`}
            onClick={() => setSelected(item.name)}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="flex-1 p-6">
        {selected === "Dashboard" ? (
          <Dashboard />
        ) : (
          <h2 className="text-2xl">{selected} Content</h2>
        )}
      </main>
    </div>
  );
}
