import React, { useState } from "react";

import styles from "./calculator.module.css";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: rgb(145, 194, 82);
  border: 2px solid rgb(145, 194, 82);
  border-radius: 5%;
  outline: none;
  font-size: 1rem;
  color: white;
  cursor: pointer;
`;

function Calculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");
  const [dietChart, setDietChart] = useState("");

  const calculateBmi = () => {
    let bmi = (weight / (height / 100) ** 2).toFixed(1);

    bmi > 0 ? setBmiResult(bmi) : setBmiResult("Invalid value!");
    let bmiStatus = getStatus(bmi);

    bmi > 0 ? setStatus(bmiStatus) : setStatus("Invalid value!");

    setHeight("");
    setWeight("");

    if (status === "Underweight") {
      setDietChart(`Sunday
        Breakfast (8:00-8:30AM)	2 egg brown bread sandwich + green chutney + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts
        Mid-Meal (11:00-11:30AM)	1 cup banana shake
        Lunch (2:00-2:30PM)	1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup rice + 1/2 cup low fat curd + salad
        Evening (4:00-4:30PM)	1 cup strawberry smoothie + 1 cup vegetable poha
        Dinner (8:00-8:30PM)	1.5 cup chicken curry + 3 chapatti + salad
        Monday
        Breakfast (8:00-8:30AM)	3 onion stuffed parantha + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts
        Mid-Meal (11:00-11:30AM)	1 cup mango shake
        Lunch (2:00-2:30PM)	1 cup moong dal/ chicken curry + 1 cup potato and caulifllower vegetable + 3 chapatti + 1/2 cup rice + salad
        Evening (4:00-4:30PM)	1 cup pomegranate juice + 2 butter toasted bread
        Dinner (8:00-8:30PM)	1 cup beans potato vegetable + 3 chapatti + salad
        Tuesday
        Breakfast (8:00-8:30AM)	3 paneer stuffed besan cheela + green chutney + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts
        Mid-Meal (11:00-11:30AM)	1 apple smoothie with maple syrup
        Lunch (2:00-2:30PM)	1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad
        Evening (4:00-4:30PM)	1 cup tomato soup with bread crumbs + 1 cup aloo chaat
        Dinner (8:00-8:30PM)	1 cup carrot peas vegetable +3 chapatti + salad
        Wednesday
        Breakfast (8:00-8:30AM)	1.5 cup vegetable bread upma + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts
        Mid-Meal (11:00-11:30AM)	1 cup ripe banana with 2 tsp ghee
        Lunch (2:00-2:30PM)	1 cup rajma curry + 1 cup spinach potato + 3 chapatti + 1/2 cup rice + salad
        Evening (4:00-4:30PM)	1 cup vegetable juice + 1 cup upma
        Dinner (8:00-8:30PM)	1.5 cup parwal vegetable + 3 chapatti + salad
        Thursday
        Breakfast (8:00-8:30AM)	2 cucmber potato sandwich + 1 tsp green chutney + 1 orange juice + 3 cshews + 2 walnuts + 4 almonds
        Mid-Meal (11:00-11:30AM)	1 cup buttermilk + 1 cup sweet potato chaat
        Lunch (2:00-2:30PM)	1 cup white chana/ fish curry + 3 chapatti + 1/2 cup rice + salad
        Evening (4:00-4:30PM)	1 cup almond milk + banana
        Dinner (8:00-8:30PM)	1 cup cauliflower potato vegetable + 3 chapatti + salad
        Friday
        Breakfast (8:00-8:30AM)	2 cup vegetable poha + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts
        Mid-Meal (11:00-11:30AM)	2 cups watermelon juice
        Lunch (2:00-2:30PM)	1 cup chana dal + 1 cup bhindi vegetable + 3 chapatti + 1/2 cup rice + salad
        Evening (4:00-4:30PM)	1 cup sprouts salad + 2 potato cheela + green chutney
        Dinner (8:00-8:30PM)	1 cup peas mushroom vegetable + 3 chapatti + salad
        Saturday
        Breakfast (8:00-8:30AM)	3 vegetable suji cheela + 1 cup strawberry shake + 4 cashews + 4 almonds + 3 walnuts
        Mid-Meal (11:00-11:30AM)	1 cup coconut water + 1 cup pomegrate
        Lunch (2:00-2:30PM)	1 cup mix dal + 1 cup soybean curry + 3 chapatti + 1/2 cup curd + salad
        Evening (4:00-4:30PM)	1 cup fruit salad + 4 pc vegetable cutlets + green chutney
        Dinner (8:00-8:30PM)	1 cup karela vegetable + 3 chaptti + salad`);
    } else if (status === "Normal Weight") {
      setDietChart(`Sunday
        Breakfast (8:00-8:30AM)	3 egg whites + 1 toasted brown bread + 1/2 cup low fat milk (no sugar)
        Mid-Meal (11:00-11:30AM)	1 cup papaya
        Lunch (2:00-2:30PM)	1 cup arhar dal + 1 chapatti + 1/2 cup low fat curd + salad
        Evening (4:00-4:30PM)	1 cup vegetable soup
        Dinner (8:00-8:30PM)	1 cup pumpkin + 1 chapatti + salad
        Monday
        Breakfast (8:00-8:30AM)	1 onion stuffed chapatti + 1/2 cup low fat curd
        Mid-Meal (11:00-11:30AM)	1 cup coconut water
        Lunch (2:00-2:30PM)	1 cup moong dal/ chicken curry + 1 chapatti + salad
        Evening (4:00-4:30PM)	1 cup pomegranate
        Dinner (8:00-8:30PM)	1 cup beans + 1 chapatti + salad
        Tuesday
        Breakfast (8:00-8:30AM)	2 besan cheela + 1/2 cup low fat curd
        Mid-Meal (11:00-11:30AM)	1 apple
        Lunch (2:00-2:30PM)	1 cup masoor dal + 1 chapatti + 1/2 up low fat curd + salad
        Evening (4:00-4:30PM)	1 cup tomato soup
        Dinner (8:00-8:30PM)	1 cup carrot peas vegetable +1 chapatti + salad
        Wednesday
        Breakfast (8:00-8:30AM)	1 cup vegetable brown bread upma + 1/2 cup low fat milk (no sugar)
        Mid-Meal (11:00-11:30AM)	1 cup musk melon
        Lunch (2:00-2:30PM)	1 cup rajma curry + 1 chapatti + salad
        Evening (4:00-4:30PM)	1 cup vegetable soup
        Dinner (8:00-8:30PM)	1 cup parwal vegetable + 1 chapatti + salad
        Thursday
        Breakfast (8:00-8:30AM)	1 cucmber hungcurd sandwich + 1/2 tsp green chutney + 1 orange
        Mid-Meal (11:00-11:30AM)	1 cup buttermilk
        Lunch (2:00-2:30PM)	1 cup white chana/ fish curry + 1 chapatti + salad
        Evening (4:00-4:30PM)	1 cup low fat milk (no sugar)
        Dinner (8:00-8:30PM)	1 cup cauliflower vegetable + 1 chapatti + salad
        Friday
        Breakfast (8:00-8:30AM)	1 cup vegetable poha + 1 cup low fat curd
        Mid-Meal (11:00-11:30AM)	1 cup watermelon
        Lunch (2:00-2:30PM)	1 cup chana dal + 1 chapatti + salad
        Evening (4:00-4:30PM)	1 cup sprouts salad
        Dinner (8:00-8:30PM)	1 cup tinda vegetable + 1 chapatti + salad
        Saturday
        Breakfast (8:00-8:30AM)	1 cup low fat milk with oats + 3-4 strawberries
        Mid-Meal (11:00-11:30AM)	1 cup coconut water
        Lunch (2:00-2:30PM)	1 cup soybean curry + 1 chapatti + 1/2 cup low fat curd + salad
        Evening (4:00-4:30PM)	1 cup fruit salad
        Dinner (8:00-8:30PM)	1 cup ghia vegetable + 1 chaptti + salad`);
    } else if (status === "Overweight") {
      setDietChart(`Sunday
        Breakfast (8:00-8:30AM)	3 egg whites + 1 toasted brown bread + 1/2 cup low fat milk (no sugar)
        Mid-Meal (11:00-11:30AM)	1 cup papaya
        Lunch (2:00-2:30PM)	1 cup arhar dal + 1 chapatti + 1/2 cup low fat curd + salad
        Evening (4:00-4:30PM)	1 cup vegetable soup
        Dinner (8:00-8:30PM)	1 cup pumpkin + 1 chapatti + salad
        Monday
        Breakfast (8:00-8:30AM)	1 onion stuffed chapatti + 1/2 cup low fat curd
        Mid-Meal (11:00-11:30AM)	1 cup coconut water
        Lunch (2:00-2:30PM)	1 cup moong dal/ chicken curry + 1 chapatti + salad
        Evening (4:00-4:30PM)	1 cup pomegranate
        Dinner (8:00-8:30PM)	1 cup beans + 1 chapatti + salad
        Tuesday
        Breakfast (8:00-8:30AM)	2 besan cheela + 1/2 cup low fat curd
        Mid-Meal (11:00-11:30AM)	1 apple
        Lunch (2:00-2:30PM)	1 cup masoor dal + 1 chapatti + 1/2 up low fat curd + salad
        Evening (4:00-4:30PM)	1 cup tomato soup
        Dinner (8:00-8:30PM)	1 cup carrot peas vegetable +1 chapatti + salad
        Wednesday
        Breakfast (8:00-8:30AM)	1 cup vegetable brown bread upma + 1/2 cup low fat milk (no sugar)
        Mid-Meal (11:00-11:30AM)	1 cup musk melon
        Lunch (2:00-2:30PM)	1 cup rajma curry + 1 chapatti + salad
        Evening (4:00-4:30PM)	1 cup vegetable soup
        Dinner (8:00-8:30PM)	1 cup parwal vegetable + 1 chapatti + salad
        Thursday
        Breakfast (8:00-8:30AM)	1 cucmber hungcurd sandwich + 1/2 tsp green chutney + 1 orange
        Mid-Meal (11:00-11:30AM)	1 cup buttermilk
        Lunch (2:00-2:30PM)	1 cup white chana/ fish curry + 1 chapatti + salad
        Evening (4:00-4:30PM)	1 cup low fat milk (no sugar)
        Dinner (8:00-8:30PM)	1 cup cauliflower vegetable + 1 chapatti + salad
        Friday
        Breakfast (8:00-8:30AM)	1 cup vegetable poha + 1 cup low fat curd
        Mid-Meal (11:00-11:30AM)	1 cup watermelon
        Lunch (2:00-2:30PM)	1 cup chana dal + 1 chapatti + salad
        Evening (4:00-4:30PM)	1 cup sprouts salad
        Dinner (8:00-8:30PM)	1 cup tinda vegetable + 1 chapatti + salad
        Saturday
        Breakfast (8:00-8:30AM)	1 cup low fat milk with oats + 3-4 strawberries
        Mid-Meal (11:00-11:30AM)	1 cup coconut water
        Lunch (2:00-2:30PM)	1 cup soybean curry + 1 chapatti + 1/2 cup low fat curd + salad
        Evening (4:00-4:30PM)	1 cup fruit salad
        Dinner (8:00-8:30PM)	1 cup ghia vegetable + 1 chaptti + salad`);
    } else {
      setDietChart(`Sunday
        Breakfast (8:00-8:30AM)	3 egg whites + 1 toasted brown bread + 1/2 cup low fat milk (no sugar)
        Mid-Meal (11:00-11:30AM)	1 cup papaya
        Lunch (2:00-2:30PM)	1 cup arhar dal + 1 chapatti + 1/2 cup low fat curd + salad
        Evening (4:00-4:30PM)	1 cup vegetable soup
        Dinner (8:00-8:30PM)	1 cup pumpkin + 1 chapatti + salad
        Monday
        Breakfast (8:00-8:30AM)	1 onion stuffed chapatti + 1/2 cup low fat curd
        Mid-Meal (11:00-11:30AM)	1 cup coconut water
        Lunch (2:00-2:30PM)	1 cup moong dal/ chicken curry + 1 chapatti + salad
        Evening (4:00-4:30PM)	1 cup pomegranate
        Dinner (8:00-8:30PM)	1 cup beans + 1 chapatti + salad
        Tuesday
        Breakfast (8:00-8:30AM)	2 besan cheela + 1/2 cup low fat curd
        Mid-Meal (11:00-11:30AM)	1 apple
        Lunch (2:00-2:30PM)	1 cup masoor dal + 1 chapatti + 1/2 up low fat curd + salad
        Evening (4:00-4:30PM)	1 cup tomato soup
        Dinner (8:00-8:30PM)	1 cup carrot peas vegetable +1 chapatti + salad
        Wednesday
        Breakfast (8:00-8:30AM)	1 cup vegetable brown bread upma + 1/2 cup low fat milk (no sugar)
        Mid-Meal (11:00-11:30AM)	1 cup musk melon
        Lunch (2:00-2:30PM)	1 cup rajma curry + 1 chapatti + salad
        Evening (4:00-4:30PM)	1 cup vegetable soup
        Dinner (8:00-8:30PM)	1 cup parwal vegetable + 1 chapatti + salad
        Thursday
        Breakfast (8:00-8:30AM)	1 cucmber hungcurd sandwich + 1/2 tsp green chutney + 1 orange
        Mid-Meal (11:00-11:30AM)	1 cup buttermilk
        Lunch (2:00-2:30PM)	1 cup white chana/ fish curry + 1 chapatti + salad
        Evening (4:00-4:30PM)	1 cup low fat milk (no sugar)
        Dinner (8:00-8:30PM)	1 cup cauliflower vegetable + 1 chapatti + salad
        Friday
        Breakfast (8:00-8:30AM)	1 cup vegetable poha + 1 cup low fat curd
        Mid-Meal (11:00-11:30AM)	1 cup watermelon
        Lunch (2:00-2:30PM)	1 cup chana dal + 1 chapatti + salad
        Evening (4:00-4:30PM)	1 cup sprouts salad
        Dinner (8:00-8:30PM)	1 cup tinda vegetable + 1 chapatti + salad
        Saturday
        Breakfast (8:00-8:30AM)	1 cup low fat milk with oats + 3-4 strawberries
        Mid-Meal (11:00-11:30AM)	1 cup coconut water
        Lunch (2:00-2:30PM)	1 cup soybean curry + 1 chapatti + 1/2 cup low fat curd + salad
        Evening (4:00-4:30PM)	1 cup fruit salad
        Dinner (8:00-8:30PM)	1 cup ghia vegetable + 1 chaptti + salad`);
    }

    const item = {
      itemHeight: height,
      itemWeight: weight,
    };

    const items = JSON.parse(localStorage.getItem("items"));

    if (!items) {
      localStorage.setItem("items", JSON.stringify([]));
      if (item.itemHeight !== "" || item.itemWeight !== "") {
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
      }
      items.push(item);
    } else {
      if (item.itemHeight !== "" || item.itemWeight !== "") {
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
      }
    }
  };

  const resetResult = () => {
    setHeight("");
    setWeight("");
    setBmiResult(null);
  };

  function getStatus(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }

  return (
    <div className={styles.calculatorBox}>
      <div className={styles.calculator}>
        <label htmlFor="Height">Height (cm)</label>
        <br />
        <input type="number" id="Height" min="1" max="250" onChange={(e) => setHeight(e.target.value)} value={height} required />
        <br />
        <br />
        <label htmlFor="Weight">Weight (kg)</label>
        <br />
        <input type="number" id="Weight" min="1" max="350" onChange={(e) => setWeight(e.target.value)} value={weight} required />
        <br />
        <br />

        {bmiResult <= 0 ? (
          <Button onClick={calculateBmi}>Calculate</Button>
        ) : (
          <div>
            <div>
              <h3>Your Info:</h3>
              <p>BMI: {bmiResult} </p>
              <p>Status: {status}</p>
              <hr></hr>
              <h4>Diet Chart:</h4>
              <p>{dietChart}</p>
            </div>
            <Button onClick={resetResult}>New Calculation</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
