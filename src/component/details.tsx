"use client";
import React, { useState } from "react";
import styled from "styled-components";

const Card = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/pdf/Arbaz_Resume.pdf";
    link.download = "Arbaz_Khan_CV.pdf";
    link.click();

    setModalMessage("CV has been downloaded!");
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 1000);
  };

  const handleCopyEmail = () => {
    const email = "khanarbaz27@outlook.com";
    navigator.clipboard.writeText(email);

    setModalMessage(`Email copied to clipboard! ${email}`);
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 1000);
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
          <button
            className="button"
            onClick={handleCopyEmail}
            title="This will copy the email address"
          >
            Contact Me
          </button>
          {"   "}
          <button
            className="button"
            onClick={handleDownloadCV}
            title="This will download the PDF"
          >
            Want the CV?
          </button>
        </div>
      </div>
      {modalVisible && (
        <ModalWrapper>
          <div className="modal">
            <p>{modalMessage}</p>
          </div>
        </ModalWrapper>
      )}
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
      width: 90vw;
      height: auto;
    }

    .head {
      font-size: 6vw;
    }

    .content {
      font-size: 4vw;
      margin-top: 10%;
    }

    .button {
      font-size: 4vw;
      padding: 10px 15px;
    }
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
  border-radius: 8px;
  color: white;
  text-align: center;
  z-index: 9999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  .modal {
    font-size: 1.5rem;
  }
`;

export default Card;
