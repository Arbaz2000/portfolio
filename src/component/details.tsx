"use client";
import React from "react";
import styled from "styled-components";

const Card = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/pdf/Arbaz_Resume.pdf";
    link.download = "Arbaz_Khan_CV.pdf";
    link.click();
  };

  const handleContactMe = () => {
    window.location.href = "mailto:khanarbaz27@outlook.com";
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="head">Hi I am Arbaz Khan</div>
          I'm a Full-Stack Developer with expertise in DevOps. Let's bring your
          ideas to life with scalable and efficient solutions!
          <br />
          <br />
          <button className="button" onClick={handleContactMe}>
            Contact Me
          </button>
          {"   "}
          <button className="button" onClick={handleDownloadCV}>
            Want the CV?
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    font-family: Montserrat, sans-serif;
    width: 70vh;
    height: 70vh;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 3vw;
    font-weight: 900;
    width: auto;
    color: #000000;
  }

  .content {
    padding: 3% 4%;
    font-size: 2vw;
    font-weight: 600;
    color: #000000;
    margin-top: 15%;
  }

  .button {
    padding: 5px 10px;
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
    translate: 2% 2%;
    box-shadow: 0 0 0 #000000;
  }

  // Mobile responsiveness
  @media (max-width: 768px) {
    .card {
      width: 90vw; // Take up 90% of the viewport width on smaller screens
      height: auto; // Make height auto to prevent overflow
    }

    .head {
      font-size: 6vw; // Reduce font size for smaller screens
    }

    .content {
      font-size: 4vw; // Adjust font size
      margin-top: 10%;
    }

    .button {
      font-size: 4vw; // Increase button text size for mobile
      padding: 10px 15px; // Adjust padding for mobile
    }
  }
`;

export default Card;
