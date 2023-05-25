import React from 'react'
import DashboardSideBar from "../components/DashboardSideBar";

export default function SettingsPage() {
  return (
    <div>
    <DashboardSideBar />
    <div class="main-content">
      <main>
        <div class="page-header">
          <h1>Settings Management</h1>
          <small>Home / Settings</small>
        </div>

        <div class="page-content">{/* content here */}</div>
      </main>
    </div>
  </div>
  )
}
