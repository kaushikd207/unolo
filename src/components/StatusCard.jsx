import React from "react";

const stats = [
  { title: "Form Filled", percent: "0%", count: "0 yesterday" },
  { title: "Photos Uploaded", percent: "5%", count: "1 yesterday" },
  { title: "New Clients", percent: "0%", count: "0 yesterday" },
  { title: "Order Submitted", percent: "0%", count: "0 yesterday" },
];

export default function StatusCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
        >
          <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
          <p className="text-2xl font-bold text-blue-600">{stat.percent}</p>
          <span className="text-gray-500">{stat.count}</span>
        </div>
      ))}
    </div>
  );
}
