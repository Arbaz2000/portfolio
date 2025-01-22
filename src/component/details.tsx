import React from "react";
import styled from "styled-components";

const Card = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/pdf/Arbaz_Resume.pdf"; // Fixed the path to start from the root.
    link.download = "Arbaz_Khan_CV.pdf";
    link.click();
  };

  const handleContactMe = () => {
    window.location.href = "mailto:khanarbaz27@outlook.com"; // Replace with your email
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
    width: 70vh; /* Adjust to percentage */
    height: 70vh; /* Use viewport height to make it responsive */
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 3vw; /* Set font size based on viewport width */
    font-weight: 900;
    width: auto;
   /* Margin set as percentage of container's height */
    color: #000000;
  }

  .content {
    padding: 3% 4%; /* Padding set as percentage of container */
    font-size: 2vw; /* Font size adjusted to viewport width */
    font-weight: 600;
    color: #000000;
    margin-top: 15%; /* Margin-top as percentage of container's height */
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
    translate: 2% 2%; /* Translate for active state as percentage */
    box-shadow: 0 0 0 #000000;
  }
`;

export default Card;
