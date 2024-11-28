import React, { useState } from "react";
import styled from "styled-components";
import Register from "./Register";
import Signin from "./Signin";

const Body = () => {
  const [display, setDisplay] = useState(0);

  const displayForm = () => {
    if (display === 0) {
      return <Register setDisplay={setDisplay}/>;
    } else if (display === 1) {
      return <Signin setDisplay={setDisplay}/>;
    }
  };

  return (
    <MainContainer>
      <div className="body">
        <div className="left">
          <div>
            <h2>
              Welcome to <br />{" "}
              <img
                className="img-main"
                src="./src/assets/SC-logo.png"
                alt="logo"
              />{" "}
              <img className="bot" src="./src/assets/favicon.png" alt="" />
            </h2>
          </div>
          <div className="about">
            <p>
              SkillConnect is an innovative AI-powered EduTech platform designed
              to empower students by streamlining their journey from learning to
              job readiness. The platform integrates interactive video lectures,
              personalized learning paths, AI-driven mock interviews, and
              automated resume generation to provide a comprehensive solution
              for career preparation. Students can access high-quality courses,
              get 24/7 support from an AI-powered chatbot, and simulate
              real-world interview scenarios with immediate feedback.
            </p>
          </div>
        </div>
        <div className="right">
          {displayForm()} {/* Fix: Call the function */}
        </div>
      </div>
    </MainContainer>
  );
};

export default Body;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: url("./src/assets/bg-auth.png") no-repeat center/cover;
  .body {
    width: 95%;
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    width: 50%;
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & .bot {
      width: 5.2vw;
      position: fixed;
      left: 15.8vw;
      top: 33vh;
      animation: rotateBot 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
      @keyframes rotateBot {
        0% {
          transform: rotate(0deg) scale(1);
        }
        25% {
          transform: rotate(360deg) scale(1.1);
        }
        50% {
          transform: rotate(360deg) scale(1);
        }
        75% {
          transform: rotate(0deg) scale(1.1);
        }
        100% {
          transform: rotate(0deg) scale(1);
        }
      }
    }
    & .img-main {
      width: 30vw;
      animation: rainbowGlow 10s infinite ease-in-out;
      @keyframes rainbowGlow {
        0% {
          filter: drop-shadow(0 0 7px rgba(37, 33, 255, 0.8))
            drop-shadow(0 0 17px rgba(37, 33, 255, 0.6))
            drop-shadow(0 0 27px rgba(33, 63, 255, 0.4));
        }
        50% {
          filter: drop-shadow(0 0 7px rgba(255, 33, 33, 0.8))
            drop-shadow(0 0 17px rgba(255, 33, 33, 0.6))
            drop-shadow(0 0 27px rgba(255, 33, 33, 0.4));
        }
        100% {
          filter: drop-shadow(0 0 7px rgba(37, 33, 255, 0.8))
            drop-shadow(0 0 17px rgba(37, 33, 255, 0.6))
            drop-shadow(0 0 27px rgba(33, 63, 255, 0.4));
        }
      }
    }
    & .about {
      width: 40vw;
      height: 40vh;
      justify-content: center;
      align-items: center;
      display: flex;
      backdrop-filter: brightness(60%);
      border-radius: 20px;

      & p {
        font-size: 18px;
        width: 90%;
        height: 90%;
        overflow-y: auto;
      }
    }
  }
  .right {
    width: 50%;
  }

  @media (max-width:815px){
    .body{
      flex-direction: column;
    }
    .left {
    width: 50%;
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & .bot {
      display: none;
    }
    & .img-main {
      min-width: 300px;
      
    }
    & .about {
      display: none;

      & p {
        display: none;
      }
    }
  }
  }
`;
