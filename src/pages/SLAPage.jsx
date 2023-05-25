import React from 'react'
import DashboardSideBar from "../components/DashboardSideBar";

export default function SLAPage() {
  return (
    <div>
    <DashboardSideBar />
    <div class="main-content">
      <main>
        <div class="page-header">
          <h1>SLA Management</h1>
          <small>Home / SLA</small>
        </div>

        <div class="page-content">{/* content here */}</div>
      </main>
    </div>
  </div>
  )
}
