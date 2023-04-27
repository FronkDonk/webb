import Card from "../components/UI/Card";
import { AuthContext } from "../components/Contexts/AuthContext";
import { useContext } from "react";
import classes from "./DashBoard.module.css";

export default function DashBoard() {
  const { currentUser, logout } = useContext(AuthContext);

  function logOutHandler () {
    logout()
  }

  return (
    <div className={classes.wrapper}>
      <Card>
        <h1>LETS FUCKING GOOO</h1>
        <div className={classes.text}>
          <strong>Email:</strong> {currentUser.email}
        </div>
        <a href="/sign-in" onClick={logOutHandler}>Sign out</a>
      </Card>
    </div>
  );
}
