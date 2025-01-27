"use client";

import React from "react";
import styled from "styled-components";
import Iconrack from "@/component/appIcons"; // Ensure correct import path for Iconrack

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="head">What I know</div>
        <div className="content">
          <Iconrack /> {/* Displaying the icon components here */}
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
  transition: all 0.3s ease;

  /* Responsiveness for the card wrapper */
  @media (max-width: 768px) {
    height: auto; /* Let the height adjust automatically for smaller screens */
    padding: 20px; /* Add padding to prevent content from touching edges */
  }

  .card {
    font-family: Montserrat, sans-serif;
    width:90%; /* Original width for large screens */
    height: auto;
    background: #eb7711;
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
    display: flex; /* Use flexbox for center alignment */
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    width: 100%;
    height: calc(100% - 80px); /* Adjust for the header height */
    font-size: 28px;
    font-weight: 600;
    color: #000000;

    /* Responsive font size */
    @media (max-width: 768px) {
      font-size: 20px; /* Smaller font size for mobile */
      padding: 10px; /* Add padding on mobile */
    }
  }

  .card:hover {
    translate: -6px;
  }
`;

export default Card;
