import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="head">About Me</div>
        <div className="content">
          I am a dedicated React and React Native developer with a proven track
          record of delivering impactful full-stack projects for my clients. My
          current focus is on mastering React and React Native, leveraging my
          solid experience in AWS to enhance my work. I am also actively
          exploring the dynamic fields of Unity, AI, and machine learning. I
          thrive on combining user-friendly designs with powerful backend
          solutions, and I'm always on the lookout for new challenges and
          opportunities in the tech world—game development is definitely on my
          radar for the future!
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */

  margin: 0;

  .card {
    font-family: Montserrat, sans-serif;
    width: 80%;
    height: 80%;
    translate: -6px -6px;
    background: #1ac2ff;
    border: 3px solid #000000;
    box-shadow: 12px 12px 0 #000000;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 50px;
    font-weight: 900;
    width: 100%;
    height: 80px;
    background: #ffffff;
    padding: 5px 12px;
    color: #000000;
    border-bottom: 3px solid #000000;
  }

  .content {
    width: 80%;
    padding: 20px 20px;
    font-size: 28px;
    font-weight: 600;
    color: #000000;
  }

  .button {
    padding: 5px 10px;
    margin-top: 10px;
    border: 3px solid #000000;
    box-shadow: 3px 3px 0 #000000;
    font-weight: 750;
    background: #4ade80;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .button:hover {
    translate: 1.5px 1.5px;
    box-shadow: 1.5px 1.5px 0 #000000;
    background: #1ac2ff;
  }

  .button:active {
    translate: 3px 3px;
    box-shadow: 0 0 0 #000000;
  }

  .card:hover {
    translate: -6px;
  }
`;

export default Card;
