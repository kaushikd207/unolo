import { useState } from "react";
import Tabs from "./Tabs";
import Overview from "./Overview";
// import LiveLocation from "./LiveLocation";
// import Timeline from "./Timeline";
// import CardView from "./CardView";
// import ComplianceStatus from "./ComplianceStatus";
// import SiteAttendance from "./SiteAttendance";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="p-6">
        {activeTab === "Overview" && <Overview />}
        {activeTab === "Live Location" && <LiveLocation />}
        {activeTab === "Timeline" && <Timeline />}
        {activeTab === "CardView" && <CardView />}
        {activeTab === "Compliance Status" && <ComplianceStatus />}
        {activeTab === "Site Attendance" && <SiteAttendance />}
      </div>
    </div>
  );
}
