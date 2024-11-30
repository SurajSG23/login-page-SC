import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";
import { backendURL } from "../constants";

const Register = ({ setDisplay }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [interest, setInterest] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${backendURL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
          username,
          college,
          branch,
          interest,
        }),
      });
      const data = await response.json();
      if (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
      setUsername("");
      setCollege("");
      setBranch("");
      setInterest("");
    }
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
        <div className="cont">
          <form action="submit" onSubmit={handleSignUp}>
            {/* Email Input */}
            <div className="input-container">
              <input
                required
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label className="label">Email</label>
              <div className="underline"></div>
            </div>

            {/* Username Input */}
            <div className="input-container">
              <input
                required
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <label className="label">Username</label>
              <div className="underline"></div>
            </div>

            {/* Password Input */}
            <div className="input-container">
              <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label className="label">Password</label>
              <div className="underline"></div>
            </div>

            {/* College Input */}
            <div className="input-container">
              <input
                required
                type="text"
                onChange={(e) => setCollege(e.target.value)}
                value={college}
              />
              <label className="label">College</label>
              <div className="underline"></div>
            </div>

            {/* Branch Input */}
            <div className="input-container">
              <input
                required
                type="text"
                onChange={(e) => setBranch(e.target.value)}
                value={branch}
              />
              <label className="label">Branch</label>
              <div className="underline"></div>
            </div>

            {/* Interest Input */}
            <div className="input-container">
              <input
                required
                type="text"
                onChange={(e) => setInterest(e.target.value)}
                value={interest}
              />
              <label className="label">Interest</label>
              <div className="underline"></div>
            </div>

            {/* Submit Button */}
            <div className="btn">
              <button className="button">
                {loading ? "Signing up..." : "Sign up"}
              </button>
            </div>
          </form>
        </div>

        {/* OR Section */}
        <div className="or">
          <p>- - - - - - - - - - OR - - - - - - - - - -</p>
        </div>

        {/* Google Sign Up Button */}
        <div className="google">
          <button className="button" onClick={handleGoogleSignUp}>
            <FaGoogle /> Google
          </button>
        </div>

        {/* Sign In Redirect */}
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
  .cont{
    height: 42vh;
    padding-top: 14px;
    overflow-y: auto;
  }
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
