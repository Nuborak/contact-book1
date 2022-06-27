import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.main}>
        <Link to={"/add"}>
          <button className={styles.btn} role="button">
            <span class="text">Add contact</span>
          </button>
        </Link>
        <Link style={{ marginLeft: "30px" }} to={"/list"}>
          <button className={styles.btn} role="button">
            <span class="text">Contact</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
