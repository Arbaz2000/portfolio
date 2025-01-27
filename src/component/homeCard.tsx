"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="head">This is ME!</div>
        <div className="content">
          <div className="image-container">
            <Image
              src="/me.png"
              alt="Next.js logo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
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
    background: #ff66a3;
    border: 3px solid #000000;
    box-shadow: 12px 12px 0 #000000;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 2vw;
    font-weight: 900;
    width: 100%;
    height: 10%;
    background: #ffffff;
    padding: 2% 3%;
    color: #000000;
    border-bottom: 3px solid #000000;
    position: relative;
  }

  .content {
    padding: 2% 3%;
    font-size: 3vw;
    font-weight: 600;
    position: relative;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 60vh;
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-6px);
  }

  // Mobile responsiveness
  @media (max-width: 768px) {
    .card {
      width: 90vw; // Make the card take up 90% of viewport width on mobile
      height: auto; // Adjust height for mobile
    }

    .head {
      font-size: 5vw; // Reduce font size on smaller screens
    }

    .content {
      font-size: 4vw; // Adjust content font size
    }

    .image-container {
      height: 40vh; // Adjust image container height for mobile
    }
  }
`;

export default Card;
