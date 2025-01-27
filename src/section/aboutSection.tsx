"use client";

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
        <div className="flex mt-10">
          <p className="bottom-right">
            I've worked on projects and I am
            <br /> skilled with new technologies. 😁✌️
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: auto; /* Let the height adjust automatically for smaller screens */
    padding: 20px; /* Add padding to prevent content from touching edges */
  }

  .card {
    font-family: Montserrat, sans-serif;
    width: 70%; /* Original width for large screens */
    height: auto;
    background: #1ac2ff;
    border: 3px solid #000000;
    box-shadow: 12px 12px 0 #000000;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;

    /* Responsive adjustments for smaller screens */
    @media (max-width: 768px) {
      width: 100%; /* Full width on smaller screens */
      box-shadow: 6px 6px 0 #000000; /* Lighter shadow on mobile */
    }
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
    text-align: left; /* Ensure the heading is aligned left */

    /* Responsive font size */
    @media (max-width: 768px) {
      font-size: 36px; /* Smaller font size for smaller screens */
      padding: 5px 10px; /* Reduced padding for mobile */
    }
  }

  .content {
    width: 100%;
    padding: 20px 20px;
    font-size: 28px;
    font-weight: 600;
    color: #000000;
    overflow-y: auto; /* Prevent content overflow */

    /* Adjust font size and padding for mobile screens */
    @media (max-width: 768px) {
      font-size: 18px; /* Smaller font size on mobile */
      padding: 10px 15px;
    }
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

    /* Adjust button padding for mobile screens */
    @media (max-width: 768px) {
      padding: 8px 16px;
    }
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

  .bottom-right {
    padding: 1%;
    bottom: 20px; /* Add some space to avoid overlap */
    right: 10px;
    font-size: 20px;
    font-weight: 700;
    color: black;
    text-align: right;
    width: 100%; /* Ensure it doesn't overlap or extend beyond the card's width */

    /* Adjust font size and position for mobile screens */
    @media (max-width: 768px) {
      font-size: 16px; /* Smaller font size on mobile */
      bottom: 15px; /* Move text further down for mobile */
      right: 15px; /* Move text further down for mobile */
    }
  }
`;

export default Card;
