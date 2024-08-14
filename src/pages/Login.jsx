import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utills/Firebase";
import styled from "styled-components";
import { useStateProvider } from "../Provider/StateProvider";
import { reducerConstants } from "../Action";
import { json, useNavigate } from "react-router-dom";

export default function Login() {
  const [{ token }, dispatch] = useStateProvider();
  // console.log(state.token);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPhoneNumber, setLoginPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [disabledEmail, setDisabledEmail] = useState(false);
  // const [disabledNumber, setDisabledNumber] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // const navigation = localStorage.getItem("path");
    const navigation = "/";
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken();
          localStorage.setItem("token", JSON.stringify(token));
          navigate(navigation);
        } catch (error) {
          console.error("Error getting user token:", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);
  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setLoginEmail(emailValue);
    // if (emailValue !== "") {
    //   setDisabledNumber(true);
    // } else {
    //   setDisabledNumber(false);
    // }
  };

  // const handlePhoneNumber = (e) => {
  //   const phoneNumberValue = e.target.value;
  //   setLoginPhoneNumber(phoneNumberValue);
  //   if (phoneNumberValue !== "") {
  //     setDisabledEmail(true);
  //   } else {
  //     setDisabledEmail(false);
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (loginEmail !== "") {
        await signInWithEmailAndPassword(auth, loginEmail, password);

        console.log("Login successful with email!");
      } else {
        await auth.signInWithEmailAndPassword(loginPhoneNumber, password);
        console.log("Login successful with phone number!");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <Container className="container">
      <label>Login</label>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Sign In</button>
      </form>
      {/* {console.log(user)} */}
    </Container>
  );
}

const Container = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
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
    background-color: #a8a8a8;
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
      cursor: pointer;
      background-color: #0000ff;
      color: white;
      font-weight: bold;
      &:hover {
        background-color: #5151ff;
      }
    }
  }
`;
