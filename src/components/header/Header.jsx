import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaMoneyBillAlt } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import Logo from "./image/logo.png";
import styles from "./header.module.css";
function Header(props) {
  const [theme, setTheme] = useState(1);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        {/* logo company */}
        <img className={styles.logoCompany} src={Logo} />

        {/* router header */}

        <div className={styles.headerRouterDom}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span
              className={
                theme === 1
                  ? styles.IconOfRouter + " " + styles.Theme
                  : styles.IconOfRouter
              }
              onClick={() => setTheme(1)}
            >
              <span className={styles.Icon}>
                <FaUsers />
              </span>
              Nhân Viên
            </span>
          </Link>
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <span
              className={
                theme === 2
                  ? styles.IconOfRouter + " " + styles.Theme
                  : styles.IconOfRouter
              }
              onClick={() => setTheme(2)}
            >
              <span className={styles.Icon}>
                <HiIdentification />
              </span>
              Phòng ban
            </span>
          </Link>
          <Link to="/payroll" style={{ textDecoration: "none" }}>
            <span
              className={
                theme === 3
                  ? styles.IconOfRouter + " " + styles.Theme
                  : styles.IconOfRouter
              }
              onClick={() => setTheme(3)}
            >
              <span className={styles.Icon}>
                <FaMoneyBillAlt />
              </span>
              Bảng lương
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
