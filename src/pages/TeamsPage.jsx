import React from 'react'
import DashboardSideBar from "../components/DashboardSideBar";

export default function TeamsPage() {
  return (
    <div>
      <DashboardSideBar />
      <div class="main-content">
        <main>
          <div class="page-header">
            <h1>Teams Management</h1>
            <small>Home / Teams</small>
          </div>

          <div class="page-content">{/* content here */}</div>
        </main>
      </div>
    </div>
  )
}
