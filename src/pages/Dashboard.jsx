import React from "react";
import './dashboard.css';

function Dashboard() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <i className="fa-solid fa-shield-halved"></i>
            Dashboard
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li className="active">
              <i className="fa-solid fa-house"></i>
              Dashboard
            </li>
            <li>
              <i className="fa-solid fa-users"></i>
              Users
            </li>
            <li>
              <i className="fa-solid fa-user"></i>
              Profile
            </li>
            <li>
              <i className="fa-solid fa-gear"></i>
              Settings
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <h1>Dashboard</h1>
          <div className="topbar-actions">
            <button className="icon-btn">
              <i className="fa-solid fa-bell"></i>
            </button>
            <button className="icon-btn">
              <i className="fa-solid fa-play"></i>
            </button>
            <div className="user-avatar">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80"
                alt="User"
              />
            </div>
          </div>
        </header>

        <div className="welcome">Welcome, Admin!</div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <div className="value">120</div>
            <div className="mini-chart green"></div>
          </div>

          <div className="stat-card">
            <h3>Nenp Users</h3>
            <div className="value">15</div>
            <div className="mini-chart orange"></div>
          </div>

          <div className="stat-card">
            <h3>Total Satees</h3>
            <div className="value">$5,230</div>
            <div className="mini-chart blue"></div>
          </div>
        </div>

        <div className="content-grid">
          <div className="card recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-chart"></div>
          </div>

          <div className="card task-list">
            <h2>Task List</h2>
            <ul>
              <li>
                <input type="checkbox" id="t1" />
                <label for="t1">Review reports</label>
              </li>
              <li>
                <input type="checkbox" id="t2" checked />
                <label for="t2">Update settings</label>
              </li>
              <li>
                <input type="checkbox" id="t3" checked />
                <label for="t3">Update reports</label>
              </li>
              <li>
                <input type="checkbox" id="t4" checked />
                <label for="t4">Update names</label>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
