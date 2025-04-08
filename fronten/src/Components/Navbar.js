import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import jwt from 'jsonw'

const Navbar = () => {
  const [login, setLogin] = useState(false);


  useEffect(() => {
    // Check if localStorage is available
    if (typeof localStorage !== "undefined") {
      const token = localStorage.getItem("token");

      console.log("token from localStorage:", token); // Log the token here

      if (token) {
        setLogin(true);
        console.log("Token exists, user is logged in.");
      } else {
        setLogin(false);
        console.log("No token, user is not logged in.");
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear token and user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("User");

    // Update login state to false
    setLogin(false);

    // Optionally, redirect user to the login page or home page
    // history.push("/login");
    console.log("User logged out");
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     setLogin(true);
  //     console.log("token", token)
  //     // const storedUser = JSON.parse(localStorage.getItem("user"));
  //     // console.log("user stored", storedUser)
  //     // console.log("user stored id", storedUser.id)
  //     // setUser(storedUser); // Set user data from localStorage
  //   } else {
  //     setLogin(false); // User is not logged in
  //   }
  // }, []);

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link class="navbar-brand" to="/">
              FLAVORBook
            </Link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {login ? (
               <>
               <li className="text-white">
                 <Link className="nav-link active" aria-current="page" to="/recipe">
                   Create
                 </Link>
               </li>
               <li className="text-white">
                 <button
                   className="btn btn-link nav-link active"
                   onClick={handleLogout} // Call logout function on click
                 >
                   Logout
                 </button>
               </li>
             </>
              ) : (
                <ul className="list-unstyled d-flex">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/register"
                    >
                      Registration
                    </Link>
                  </li>
                </ul>
              )}

            </ul>

            <form class="d-flex" role="search" style={{ height: "42px", width: "45vw" }}>
              <input
                class="form-control me-2 w-30"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button class="btn btn-outline-success" type="submit" style={{ width: "10vw" }}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <div>
// <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <Link class="navbar-brand" to="/">Navbar</Link>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <Link class="nav-Link active" aria-current="page" to="#">Home</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-Link" to="/login">Login</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-Link" to="/register">Register</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-Link" to="/Link">Link</Link>
//         </li>

//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

//     </div>
//   )
// }
