import React from "react";
import LineChart from "../../components/line-chart";

const BarChart = () => {
  return <h2>Bar Chart</h2>;
};

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <LineChart />
      <BarChart />
    </div>
  );
};

export default Dashboard;
