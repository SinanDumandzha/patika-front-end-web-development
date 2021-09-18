import React from "react";

import styles from "./description.module.css";

import bmi from "../../asset/bmi.jpg";

function Description() {
  return (
    <div className={styles.descriptionBox}>
      <div className={styles.description}>
        <h3>What is a BMI (Body Mass Index)?</h3>
        <p>
          Body mass index (BMI) is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of
          the body height, and is expressed in units of kg/m2, resulting from mass in kilograms and height in metres.
        </p>
        <img src={bmi} alt="bmi" />
      </div>
    </div>
  );
}

export default Description;
