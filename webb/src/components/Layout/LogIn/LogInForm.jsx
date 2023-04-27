import Card from "../../UI/Card";
import InputField from "../../UI/InputField";
import InputFieldCard from "../../UI/InputFieldCard";
import { useState, useRef, useContext } from "react";
import classes from "./LogInForm.module.css";
import Button from "../../UI/Button";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogInForm() {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const [error, setError] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      setError("");
      setShowErrorMsg(false);
      setLoading(true);
      await login(email, password);
      console.log("Login successful");
      navigate("/dashboard");
    } catch {
      setError("Incorrect email or password.");
      setShowErrorMsg(true);
    }
    setLoading(false);
  }

  return (
    <>
      <div className={classes.wrapper}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Card>
            <div className={classes.textContainer}>
              <h3 className={classes.logo}>NextTech</h3>
            </div>
            <h3 className={classes.signInText}>Sign in to your account</h3>

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
            </InputFieldCard>
            <InputFieldCard>
              <label className={classes.forgotPassword}>
                <a href="/reset">Forgot your password?</a>
              </label>
              <InputField
                type="password"
                id="passwordLogin"
                label="Password"
                placeholder=""
                name="password"
                ref={passwordRef}
                required
              />
              {showErrorMsg && <p className={classes.errorMessage}>{error}</p>}
            </InputFieldCard>
            <p className={classes.signUpLink}>
              Don't have an account? <a href="/sign-up">Sign up</a>
            </p>
            <Button disabled={loading} type="submit" buttonText="Continue" />
          </Card>
        </form>
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
