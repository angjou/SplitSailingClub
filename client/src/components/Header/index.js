import React from "react";
import { Link }from 'react-router-dom';
import styles from "./styles.module.css";

export default () => (
  <header className={styles.Header}>
    
    <div className = "Nav">
        <Link exact to="/" >
          Home
        </Link>|
        <Link to="/sailingschool">Sailing School</Link>|
        <Link to="/regate">Regate</Link>|
        <Link to="/about">About</Link>|
        <Link to="/register">Register</Link>|
        <Link to="/login">Login</Link>
    </div>
   
  </header>
);
