import React from "react";

const teamAttendance = [
  { name: "Bond", punchedIn: 0, punchedOut: 3 },
  { name: "Default", punchedIn: 3, punchedOut: 5 },
  { name: "Ombhagwan", punchedIn: 1, punchedOut: 0 },
];

export default function TeamwiseAttendance() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Teamwise Attendance</h2>
      <ul className="list-none space-y-2">
        {teamAttendance.map((team) => (
          <li
            key={team.name}
            className="flex justify-between p-2 bg-gray-100 rounded-md shadow-sm"
          >
            <span className="font-medium">{team.name}</span>
            <span className="text-blue-600">
              {team.punchedIn} / {team.punchedOut}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
