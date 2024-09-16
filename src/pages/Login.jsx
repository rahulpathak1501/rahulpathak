import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithEmail, monitorAuthState } from "../Utills/authAction";
import Loader from "../Components/Loader";
import styled from "styled-components";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPhoneNumber, setLoginPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // const navigation = localStorage.getItem("path");
    const unsubscribe = monitorAuthState(navigate); // Use monitorAuthState action
    return () => unsubscribe();
  }, [navigate]);
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    await loginWithEmail(loginEmail, password, setLoading, navigate);
  };

  // const handlePhoneNumber = (e) => {
  //   e.preventDefault();
  //   await loginWithPhoneNumber(loginPhoneNumber, setLoading, navigate);
  // };

  return (
    <>
      {loading ? ( // Show the loader when loading is true
        <Loader />
      ) : (
        <Container className="container">
          <label>Login</label>
          <form onSubmit={handleEmailLogin}>
            <input
              type="email"
              placeholder="abc@gmail.com"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            {/*<p>Or</p>
         <input
          type="number"
          placeholder="+919988774455"
          onChange={handlePhoneNumber}
          disabled={disabledNumber}
        /> */}
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
          </form>

          {/* {console.log(user)} */}
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  background-color: white;
  height: auto;
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(98, 98, 98, 0.98), 0 12px 32px rgba(0, 0, 0, 0.12),
    0 16px 40px rgba(151, 151, 151, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  border-radius: 1rem;
  margin: 5vh auto;

  label {
    background-color: #f1f1f1;
    margin-bottom: 20px;
    padding: 10px 20px;
    border-radius: 1rem;
    text-align: center;
    font-size: 1.5rem;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;

    input {
      margin-bottom: 20px;
      padding: 12px;
      border-radius: 0.5rem;
      border: 1px solid #ccc;
      font-size: 1rem;
      width: 100%;
      box-sizing: border-box;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: #007bff;
      }
    }

    button {
      width: 100%;
      padding: 12px;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      background-color: #007bff;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
