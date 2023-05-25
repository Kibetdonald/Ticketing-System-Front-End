import React from "react";
import DashboardSideBar from "../components/DashboardSideBar";

export default function UsersPage() {
  return (
    <div>
      <DashboardSideBar />
      <div class="main-content">
        <main>
          <div class="page-header">
            <h1>Users Management</h1>
            <small>Home / Dashboard</small>
          </div>

          <div class="page-content">{/* content here */}</div>
        </main>
      </div>
    </div>
  );
}
