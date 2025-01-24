import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="book">
        <strong>
          <a
            href="https://github.com/harshendraup/WaterCan-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web
          </a>
        </strong>
        <strong>
          <a
            href="https://github.com/kajal-sharma007/WaterCanApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            App
          </a>
        </strong>
        <strong>
          <a
            href="https://github.com/Arbaz2000/WaterCan-Backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend
          </a>
        </strong>
        <div className="cover">
          <p>View on GitHub</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .book {
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: flex;
    flex-direction: column; /* This will stack the links vertically */
    align-items: center;
    justify-content: center;
    color: #000;
    padding: 1rem;
    gap: 1rem;
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: #faf9f6;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .book:hover .cover {
    transform: rotateY(-80deg);
  }

  p {
    font-size: 20px;
    font-weight: bolder;
  }

  a {
    margin: 5px 0; /* Space between links */
    text-decoration: none;
    color: #000;
    font-size: 16px;
  }

  a:hover {
    color: #0077cc; /* Change color on hover */
  }
`;

export default Card;
