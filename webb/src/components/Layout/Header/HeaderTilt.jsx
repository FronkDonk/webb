import React from "react";
import classes from "./HeaderTilt.module.css";
import HeaderFiller from "./HeaderFiller";

export default function HeaderTilt() {
  return (
    <>
      <div className={classes.shapeContainer}>
        <div className={classes["custom-shape-divider-bottom-1679573461"]}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className={classes["shape-fill"]}
            ></path>
          </svg>
        </div>
        <HeaderFiller />
      </div>
    </>
  );
}
