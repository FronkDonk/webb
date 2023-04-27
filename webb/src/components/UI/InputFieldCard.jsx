import classes from "./InputFieldCard.module.css"

export default function InputFieldCard(props) {
  return <div className={classes["form-group"]}>{props.children}</div>;
}
