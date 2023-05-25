import React from 'react'
import DashboardSideBar from "../components/DashboardSideBar";

export default function ReportsPage() {
  return (
    <div>
    <DashboardSideBar />
    <div class="main-content">
      <main>
        <div class="page-header">
          <h1>Reports Management</h1>
          <small>Home / Reports</small>
        </div>

        <div class="page-content">{/* content here */}</div>
      </main>
    </div>
  </div>
  )
}
