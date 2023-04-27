import classes from "./Card.module.css";

export default function Card(props) {
  return <div className={classes["contact-form"]}>{props.children}</div>;
}
