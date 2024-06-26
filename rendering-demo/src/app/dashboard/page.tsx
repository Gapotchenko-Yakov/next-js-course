"use client";

import React, { useState } from "react";

const DashboardPage = () => {
  console.log("Dashboard client component");
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}</p>
    </div>
  );
};

export default DashboardPage;
