import React from 'react';



export const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Búvárbázis</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Locations">Úticélok</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">Tudnivalók</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/map">Térkép</a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/login">Bejelentkezés</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">Regisztráció</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

