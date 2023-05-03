import classes from "./InputForm.module.css";
import Nav from "../Header/Nav";
import checkIcon from "../../../assets/1-circle.svg";
import InputField from "../../UI/InputField";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import InputFieldCard from "../../UI/InputFieldCard";
import { useRef, useState } from "react";
import BulletPoints from "../../UI/BulletPoints";

export default function InputForm() {
  const nameRef = useRef(null);
  const companyRef = useRef(null);

  const [submit, setSubmit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(true);
  }

  return (
    <>
      <Nav />
      {submit && (
        <div className={classes.submitMessage}>
          <Card>
            <h1>
              Thank you {nameRef.current.value} from {companyRef.current.value}{" "}
              we will reach back to you as soon as we can!
            </h1>
          </Card>
        </div>
      )}
      {!submit && (
        <div className={classes["flex-container"]}>
          <BulletPoints />
          <Card>
            <form onSubmit={handleSubmit}>
              <InputFieldCard>
                <InputField
                  type="text"
                  id="name"
                  label="Name"
                  placeholder="Enter your name"
                  name="name"
                  ref={nameRef}
                  required
                />
              </InputFieldCard>
              <InputFieldCard>
                <InputField
                  type="email"
                  id="email"
                  label="Email"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
              </InputFieldCard>
              <InputFieldCard>
                <InputField
                  type="text"
                  id="company"
                  label="Company"
                  ref={companyRef}
                  placeholder="Enter your company name"
                  name="company"
                  required
                />
              </InputFieldCard>
              <div className={classes["form-group"]}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <Button type="submit" buttonText="Send" />
            </form>
          </Card>
        </div>
      )}
    </>
  );
}
