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
              src="/me.png" // Fixed the path here
              alt="Next.js logo"
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the area without distorting the aspect ratio
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
    width: 70vh; /* Adjust to percentage */
    height: 70vh; /* Use viewport height to make it responsive */
    background: #ff66a3;
    border: 3px solid #000000;
    box-shadow: 12px 12px 0 #000000;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative; /* Ensure the image fills the container */
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 2vw; /* Responsive font size */
    font-weight: 900;
    width: 100%;
    height: 10%; /* Adjust based on the card height */
    background: #ffffff;
    padding: 2% 3%; /* Use percentage for padding */
    color: #000000;
    border-bottom: 3px solid #000000;
    position: relative; /* Ensure proper stacking context */
  }

  .content {
    padding: 2% 3%; /* Use percentage for padding */
    font-size: 3vw; /* Adjust font size responsively */
    font-weight: 600;
    position: relative; /* Ensure proper stacking context */
  }

  .image-container {
    position: relative; /* Ensures the Image component can use layout="fill" */
    width: 100%;
    height: 60vh; /* Adjust based on your requirements */
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(
      -6px
    ); /* Use translateY instead of translate for better control */
  }
`;

export default Card;
