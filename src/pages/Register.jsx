import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Utills/Firebase";
import styled from "styled-components";

export default function Register() {
  const [registrationEmail, setRegistrationEmail] = useState("");
  const [registrationPhoneNumber, setRegistrationPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [disabledEmail, setDisabledEmail] = useState(false);
  const [disabledNumber, setDisabledNumber] = useState(false);

  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setRegistrationEmail(emailValue);
    if (emailValue !== "") {
      setDisabledNumber(true);
    } else {
      setDisabledNumber(false);
    }
  };

  const handlePhoneNumber = (e) => {
    const phoneNumberValue = e.target.value;
    setRegistrationPhoneNumber(phoneNumberValue);
    if (phoneNumberValue !== "") {
      setDisabledEmail(true);
    } else {
      setDisabledEmail(false);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      if (registrationEmail !== "") {
        await createUserWithEmailAndPassword(auth, registrationEmail, password);
        console.log("registration successful with email!");
      } else {
        await auth.createUserWithEmailAndPassword(
          registrationPhoneNumber,
          password
        );
        console.log("registration successful with phone number!");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <Container className="container">
      <label>Sign Up</label>
      <form onSubmit={handleRegistration}>
        <input
          type="email"
          placeholder="abc@gmail.com"
          onChange={handleEmail}
          disabled={disabledEmail}
        />
        {/*<p>Or</p>
         <input
          type="number"
          placeholder="+919988774455"
          onChange={handlePhoneNumber}
          disabled={disabledNumber}
        /> */}
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  height: 70vh;
  width: 30vw;
  box-shadow: 0 8px 16px rgb(98 98 98 / 98%), 0 12px 32px rgba(0, 0, 0, 0.12),
    0 16px 40px rgb(151 151 151 / 85%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-weight: bold;
  border-radius: 0.5rem;
  label {
    background-color: blue;
    margin: 10px;
    padding: 5px;
    border-radius: 0.5rem;
    text-align: center;
    width: 5rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input {
      margin-bottom: 10px;
      padding: 5px;
      border-radius: 0.3rem;
      border: 1px solid black;
    }
    button {
      width: 5rem;
      padding: 5px;
      border-radius: 0.3rem;
      border: 1px solid black;
    }
  }
`;
