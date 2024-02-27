/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";

const NavBar = () => {
  const handleToggleClick = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.toggle("collapsed");
    }
  };

  return (
    <div>
      <div className="main">
        {/* Navbar Start */}
        <nav className="navbar navbar-expand px-3 border-bottom">
          <button
            className="btn"
            id="sidebar-toggle"
            onClick={handleToggleClick}
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse navbar">
            <h5 className="navbar-text mx-auto" aria-label="Site Name">
              আশা লতা সংস্থা
            </h5>
            <form className="d-flex" aria-label="Search Form">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button id="serach" className="btn btn-primary" type="button">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
