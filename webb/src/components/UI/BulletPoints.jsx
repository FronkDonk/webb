import React from "react";
import classes from "./BulletPoints.module.css";
import checkIcon from "../../assets/1-circle.svg";

export default function BulletPoints() {
  return (
    <div className={classes["form-side-text"]}>
      <h1>Contact us</h1>
      <div className={classes["form-side-text-description"]}>
        <h4>With us you can:</h4>
        <div className={classes["icon-and-text"]}>
          <img src={checkIcon} alt="cool check icon" />
          <p>Something</p>
        </div>
        <div className={classes["icon-and-text"]}>
          <img src={checkIcon} alt="cool check icon" />
          <p>Something</p>
        </div>
        <div className={classes["icon-and-text"]}>
          <img src={checkIcon} alt="cool check icon" />
          <p>Something</p>
        </div>
      </div>
    </div>
  );
}
