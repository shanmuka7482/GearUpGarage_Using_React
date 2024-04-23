import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation
import logo from "../../photos/logo.png";
import styles from "./Navbar.module.css";
function NavScrollExample() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <a href="#home"  >
            <img src={logo} alt="Logo" style={{ width: "200px" }} />
          </a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Home
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                About
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Services
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                FAQs
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Contact

              </a>
            </li>
          </ul>
          <a href="#home"  className={`${styles.login}`}>
            Login
          </a>

          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavScrollExample;