import {
  FaTachometerAlt,
  FaMapMarkerAlt,
  FaClock,
  FaIdCard,
  FaClipboardCheck,
  FaUsers,
} from "react-icons/fa";
import Navbar from "./Navbar";

const tabs = [
  { name: "Overview", icon: <FaTachometerAlt /> },
  { name: "Live Location", icon: <FaMapMarkerAlt /> },
  { name: "Timeline", icon: <FaClock /> },
  { name: "CardView", icon: <FaIdCard /> },
  { name: "Compliance Status", icon: <FaClipboardCheck /> },
  { name: "Site Attendance", icon: <FaUsers /> },
];

export default function Tabs({ activeTab, setActiveTab }) {
  console.log(activeTab);
  return (
    <>
      <nav className="flex justify-between md:justify-start bg-gray-900 text-white p-4 overflow-x-auto space-x-2 md:space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition-all ${
              activeTab === tab.name ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.icon} {tab.name}
          </button>
        ))}
      </nav>
    </>
  );
}
