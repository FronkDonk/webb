import Card from "../../UI/Card";
import InputField from "../../UI/InputField";
import InputFieldCard from "../../UI/InputFieldCard";
import { useRef, useState, useContext } from "react";
import classes from "./SignUpForm.module.css";
import Button from "../../UI/Button";
import firebase from "../../../firebase";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showErrorMsg, setShowErrorMsg] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    if (passwordRef.current.value.length < 6) {
      return setError(
        "Your password is not strong enough. Your password must be at least 6 characters."
      );
    }

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      setError("");
      setShowErrorMsg(false);
      setLoading(true);
      await signUp(email, password);
      console.log("account created");
      navigate("/dashboard");
    } catch {
      setShowErrorMsg(true);
      setError("Failed to create an account ");
      console.log("error");
    }
    setLoading(false);
  }

  return (
    <>
      <div className={classes.wrapper}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Card>
            <h3 className={classes.signInText}>Create your account</h3>

            <InputFieldCard>
              <InputField
                type="email"
                id="email"
                label="Email"
                placeholder=""
                name="email"
                ref={emailRef}
                required
              />
            </InputFieldCard>
            <InputFieldCard>
              <InputField
                type="password"
                id="password"
                label="Password"
                placeholder=""
                name="password"
                ref={passwordRef}
                required
              />
            </InputFieldCard>
            <InputFieldCard>
              <InputField
                type="password"
                id="confirmPassword"
                label="Confirm Password"
                placeholder=""
                ref={passwordConfirmRef}
                name="password"
                required
              />
              {!showErrorMsg && <p className={classes.errorMessage}>{error}</p>}
            </InputFieldCard>
            <p>
              Already have an account? <a href="/sign-in">Sign in</a>
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
