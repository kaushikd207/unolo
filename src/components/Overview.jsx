import React from "react";
import EmployeeTable from "./EmployeeTable";
import StatsCard from "./StatsCard";
import TeamwiseAttendance from "./Teamwiseattendance";
import ExpenseChart from "./ExpenseChart";
import TaskStatusChart from "./TaskStatusChart";
import WorkingHoursChart from "./WorkinghoursChart";
import OffDutyTable from "./OffdutyTable";
import StatusCard from "./StatusCard";

function Overview() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-max md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 overflow-y-scroll md:h-[530px]">
        <div className="p-4 bg-white shadow rounded-lg">
          <StatsCard />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <TeamwiseAttendance />
        </div>
        <div className="p-4 bg-white shadow rounded-lg ">
          <EmployeeTable />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <OffDutyTable />
        </div>
        <div className="p-4 bg-white shadow rounded-lg items-center">
          <StatusCard />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <ExpenseChart />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <WorkingHoursChart />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <TaskStatusChart />
        </div>
      </div>
    </>
  );
}

export default Overview;
