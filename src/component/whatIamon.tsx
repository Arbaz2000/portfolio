import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="head">What I'm working on</div>
        <div className="content">
          <h1>
            <strong>Grocery Delivery App</strong>
          </h1>
          I'm building a grocery delivery app for semi-rural and semi-urban
          areas, inspired by Blinkit and Zomato. It will have three components:
          <ul>
            <li>Customer App</li>
            <li>Shop Owner App</li>
            <li>Driver App</li>
          </ul>
          Feel free to reach out if you'd like to connect or collaborate!
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

  
  padding: 2rem;
  gap: 1rem;
  .card {
    font-family: Montserrat, sans-serif;
    width: auto;
    // height:auto;
    translate: -6px -6px;
    background: #ff66a3;
    border: 3px solid #000000;
    box-shadow: 12px 12px 0 #000000;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 25px;
    font-weight: 900;
    width: 100%;
    height: auto;
    background: #ffffff;
    padding: 5px 12px;
    color: #000000;
    border-bottom: 3px solid #000000;
  }

  .content {
    padding: 12px 15px;
    font-size: 20px;
    font-weight: 600;
    color: #000000;
  }

  ul {
    padding-left: 20px;
  }

  .button {
    padding: 10px 15px;
    margin-top: 15px;
    margin-right: 10px;
    border: 3px solid #000000;
    box-shadow: 3px 3px 0 #000000;
    font-weight: 750;
    background: #4ade80;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .button:hover {
    transform: translate(1.5px, 1.5px);
    box-shadow: 1.5px 1.5px 0 #000000;
    background: #1ac2ff;
  }

  .button:active {
    transform: translate(3px, 3px);
    box-shadow: 0 0 0 #000000;
  }

  .card:hover {
    transform: translate(-6px, -6px);
  }
`;

export default Card;
