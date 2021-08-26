import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/home" className="brand-link">
          <span className="brand-text font-weight-light">Sales Manager</span>
        </Link>
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image"></div>
            <div className="info">
              <Link to="#" className="d-block">
                Alexander Pierce
              </Link>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/items" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Items</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
