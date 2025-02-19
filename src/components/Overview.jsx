import React from "react";
import EmployeeTable from "./EmployeeTable";
import StatsCard from "./StatsCard";
import TeamwiseAttendance from "./Teamwiseattendance";
import ExpenseChart from "./ExpenseChart";

function Overview() {
  return (
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
        <h3 className="text-lg font-semibold mb-2">Card </h3>
        <p className="text-gray-600">This is card content.</p>
      </div>
      <div className="p-4 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Card </h3>
        <p className="text-gray-600">This is card content.</p>
      </div>
      <div className="p-4 bg-white shadow rounded-lg">
        <ExpenseChart />
      </div>
      <div className="p-4 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Card </h3>
        <p className="text-gray-600">This is card content.</p>
      </div>
      <div className="p-4 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Card </h3>
        <p className="text-gray-600">This is card content.</p>
      </div>
    </div>
  );
}

export default Overview;
