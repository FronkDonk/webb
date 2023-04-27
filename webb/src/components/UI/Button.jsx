import { useState } from "react"
import classes from "./Button.module.css"

export default function Button (props) {


    return <button onClick={props.onClick} className={classes.button} type={props.type}>{props.buttonText}</button>
}