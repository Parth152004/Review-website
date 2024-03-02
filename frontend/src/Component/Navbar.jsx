import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Style from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg  ${Style.navcol}`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}
      >
        <div className="container-fluid container">
          <Link className="navbar-brand text-white" to="/">
            Reviewsite
          </Link>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse text-white`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${
                    useLocation().pathname === '/Movie' ? 'active' : ''
                  }`}
                  aria-current="page"
                  to="/Movie"
                >
                  Movie
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${
                    useLocation().pathname === '/Books' ? 'active' : ''
                  } `}
                  to="/Books"
                >
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${
                    useLocation().pathname === '/Apps' ? 'active' : ''
                  } `}
                  to="/Apps"
                >
                  Apps
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${
                    useLocation().pathname === '/Apps' ? 'active' : ''
                  } `}
                  to="/Login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${
                    useLocation().pathname === '/Apps' ? 'active' : ''
                  } `}
                  to="/Apps"
                >
                  Signin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
