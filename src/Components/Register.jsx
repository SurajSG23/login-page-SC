import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";
const Register = ({ setDisplay }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(email + " " + password);
    setEmail("");
    setPassword("");
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign Up");
  };

  return (
    <MainContainer>
      <div className="body2">
        <div>
          <h2>Register</h2>
        </div>
        <div>
          <form action="submit" onSubmit={handleSignUp}>
            <div className="input-container">
              <input
                required
                id="input"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <label htmlFor="input" className="label">
                Email
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                required
                id="input"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <label htmlFor="input" className="label">
                Password
              </label>
              <div className="underline"></div>
            </div>
            <div className="btn">
              <div className="btn">
                <button className="button">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
        <div className="or">
          <p>- - - - - - - - - - OR - - - - - - - - - -</p>
        </div>
        <div className="google">
          <button className="button" onClick={handleGoogleSignUp}>
            <FaGoogle /> Google
          </button>
        </div>
        <div>
          <p>
            Already have an account?{" "}
            <a
              onClick={() => {
                setDisplay(1);
              }}
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Register;

const MainContainer = styled.div`
  width: 30vw;
  height: auto;
  border: 1px solid #ffffff62;
  display: flex;
  margin: 5vh auto;
  border-radius: 10px;
  backdrop-filter: blur(5px) brightness(0.9) contrast(107%);
  justify-content: center;
  align-items: center;
  animation: btn-anim1 1.5s linear infinite;
  padding: 40px 0;
  .body2 {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    justify-content: space-evenly;
    .or {
      margin: 30px 0;
    }
    a {
      all: unset;
      color: #7e7eff;
      cursor: pointer;
      text-decoration: underline;
    }
    .google {
      margin: 20px 0;
      & button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 7px;
        margin: 0 auto;
      }
    }
    .button {
      --color: #dcdcff;
      padding: 0.3em 1.5em;
      background-color: transparent;
      border-radius: 0.3em;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      transition: 0.5s;
      font-weight: 700;
      font-size: 17px;
      border: 1px solid;
      font-family: inherit;
      text-transform: uppercase;
      color: var(--color);
      z-index: 1;
      margin-bottom: 18px;
    }

    .button::before,
    .button::after {
      content: "";
      display: block;
      width: 50px;
      height: 50px;
      transform: translate(-50%, -50%);
      position: absolute;
      border-radius: 50%;
      z-index: -1;
      background-color: var(--color);
      transition: 1s ease;
    }

    .button::before {
      top: -1em;
      left: -1em;
    }

    .button::after {
      left: calc(100% + 1em);
      top: calc(100% + 1em);
    }

    .button:hover::before,
    .button:hover::after {
      height: 410px;
      width: 410px;
    }

    .button:hover {
      color: rgb(10, 25, 30);
    }

    .button:active {
      filter: brightness(0.8);
    }

    h2 {
      font-weight: 300;
      font-size: 25px;
    }

    .input-container {
      position: relative;
      margin: 0 0 50px 0;
      width: 25vw;
    }

    .input-container input[type="text"],
    .input-container input[type="password"] {
      font-size: 20px;
      width: 100%;
      border: none;
      border-bottom: 2px solid #ccc;
      padding: 5px 0;
      background-color: transparent;
      outline: none;
      color: white;
    }

    .input-container .label {
      position: absolute;
      top: 10px;
      left: 0;
      color: #ccc;
      transition: all 0.3s ease;
      pointer-events: none;
      font-size: 20px;
    }

    .input-container input[type="text"]:focus ~ .label,
    .input-container input[type="text"]:valid ~ .label,
    .input-container input[type="password"]:focus ~ .label,
    .input-container input[type="password"]:valid ~ .label {
      top: -20px;
      font-size: 16px;
      color: #6b6bff;
    }

    .input-container .underline {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: #6b6bff;
      transform: scaleX(0);
      transition: all 0.3s ease;
    }

    .input-container input[type="password"]:focus ~ .underline,
    .input-container input[type="password"]:valid ~ .underline,
    .input-container input[type="text"]:focus ~ .underline,
    .input-container input[type="text"]:valid ~ .underline {
      transform: scaleX(1);
    }
  }
  @media (max-width: 1024px) {
    width: 40vw;
    padding: 20px 0;
  }
  @media (max-width: 815px) {
    width: 90vw;
    left: -22vw;
    position: relative;
    .body2 {
      & .input-container {
        position: relative;
        margin: 0 0 50px 0;
        width: 90%;
        left: 20px;
      }
    }
  }
`;
