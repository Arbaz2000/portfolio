import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="head">What I'm working on</div>
        <div className="content">
          <h1>
            <strong>Hotel & Lead Management Dashboard</strong>
          </h1>
          I'm building a comprehensive dashboard in TSX, handling API
          integration, UI design, and functionality for hotel and lead
          management.
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
`;

export default Card;
