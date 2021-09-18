import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styles from "./header.module.css";

import Calculator from "../Calculator/Calculator";
import Description from "../Description/Description";

function Header() {
  return (
    <Router>
      <div>
        <div className={styles.header}>
          <h1>BMI Calculator</h1>
        </div>
        <div className={styles.navbar}>
          <div className={styles.navbarLinks}>
            <Link to="/">BMI Calculator</Link>
            <Link to="/bmi">What is BMI?</Link>
          </div>
        </div>
        <Switch>
          <Route path="/bmi" component={Description} />
          <Route exac path="/" component={Calculator} />
        </Switch>
      </div>
    </Router>
  );
}

export default Header;
