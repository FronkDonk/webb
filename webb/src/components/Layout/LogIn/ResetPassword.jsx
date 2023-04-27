import Card from "../../UI/Card";
import InputField from "../../UI/InputField";
import InputFieldCard from "../../UI/InputFieldCard";
import { useState, useRef, useContext } from "react";
import classes from "./ResetPassword.module.css";
import Button from "../../UI/Button";
import { AuthContext } from "../../Contexts/AuthContext";

export default function ResetPassword() {
  const emailRef = useRef(null);
  const [error, setError] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useContext(AuthContext);
  const [showMessage, setShowMessage] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    try {
      setError("");
      setShowErrorMsg(false);
      setLoading(true);
      await resetPassword(email);
      setShowMessage(true);
      console.log("Login successful");
    } catch {
      setError("We couldn't find that email. Please try again.");
      setShowErrorMsg(true);
    }
    setLoading(false);
  }

  return (
    <>
      <div className={classes.wrapper}>
        {showMessage && (
          <div className={classes.thankYouMessage}>
            <Card>
              <h1>Thanks! An email has been sent!</h1>
            </Card>
          </div>
        )}

        {!showMessage && (
          <form onSubmit={handleSubmit} className={classes.form}>
            <Card>
              <div className={classes.textContainer}>
                <h3 className={classes.logo}>NextTech</h3>
              </div>
              <div className={classes.textContainer2}>
                <h3 className={classes.signInText}>Reset your password</h3>
                <p>
                  Enter the email address associated with your account and we'll
                  send you a link to reset your password.
                </p>
              </div>
              <InputFieldCard>
                <InputField
                  type="email"
                  id="emailLogin"
                  label="Email"
                  placeholder=""
                  name="email"
                  ref={emailRef}
                  required
                />
                {showErrorMsg && (
                  <p className={classes.errorMessage}>{error}</p>
                )}
              </InputFieldCard>

              <p className={classes.signUpLink}>
                Don't have an account? <a href="/sign-up">Sign up</a>
              </p>
              <Button disabled={loading} type="submit" buttonText="Continue" />
            </Card>
          </form>
        )}
        <div className={classes.shapeContainer}>
          <div className={classes["custom-shape-divider-bottom-1681245346"]}>
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
          <div className={classes.filler}></div>
        </div>
      </div>
    </>
  );
}
