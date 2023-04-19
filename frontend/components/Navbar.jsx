import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.navbar} ${showNavbar ? styles.showNavbar : ""}`}
    >
      <a className={styles.navLink} href="/">
        BitsOrBytes
      </a>
      <a className={styles.navLink} href="/">
        Home
      </a>
      <a className={styles.navLink} href="#aboutme">
        About Me
      </a>
      <a className={styles.navLink} href="#auditchallenges">
        Audit Challenges
      </a>
    </div>
  );
};

export default Navbar;