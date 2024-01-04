"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <Image
          src="https://www.rentomojo.com/public/images/Home/new/logo.svg"
          alt="logo"
          width="30"
          height="30"
        />
        <h1>rentomojo</h1>
      </div>
      <div className="Navbar-region">
        <button>
          Kolkata <span>˅</span>
        </button>
      </div>
      <div className="Navbar-search">
        <input type="text" placeholder="Search for products"/>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="black"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </span>
      </div>
      <div className="Navbar-cart">
        <button>
          Cart{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              className="bi bi-cart2"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
          </span>
        </button>
      </div>
      <div className="Navbar-login">
        <button>Login/Signup</button>
      </div>
    </div>
  );
};

export default NavBar;
