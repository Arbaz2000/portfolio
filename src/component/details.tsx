"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useHomeTheme } from "@/context/HomeThemeContext";

const Card = () => {
  const { theme } = useHomeTheme();
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
    <StyledWrapper $theme={theme}>
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

const StyledWrapper = styled.div<{ $theme: any }>`
  .card {
    font-family: Montserrat, sans-serif;
    width: 70vh;
    height: 70vh;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    position: relative;
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 3vw;
    font-weight: 900;
    width: auto;
    color: ${(props) => props.$theme.colors.text};
    transition: color 0.3s ease-in-out;
  }

  .content {
    padding: 3% 4%;
    font-size: 2vw;
    font-weight: 600;
    color: ${(props) => props.$theme.colors.text};
    margin-top: 15%;
    transition: color 0.3s ease-in-out;
  }

  .button {
    padding: 5px 10px;
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 3px 3px 0 ${(props) => props.$theme.colors.shadow};
    font-weight: 750;
    background: ${(props) => props.$theme.name === 'neo-brutalism' ? '#4ade80' : '#cccccc'};
    color: ${(props) => props.$theme.colors.text};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .button:hover {
    translate: 1.5px 1.5px;
    box-shadow: 1.5px 1.5px 0 ${(props) => props.$theme.colors.shadow};
    background: ${(props) => props.$theme.name === 'neo-brutalism' ? '#1ac2ff' : '#999999'};
  }

  .button:active {
    translate: 2% 2%;
    box-shadow: 0 0 0 ${(props) => props.$theme.colors.shadow};
  }

  // Tablet responsiveness
  @media (max-width: 1024px) {
    .card {
      width: 80vh;
      height: auto;
    }

    .head {
      font-size: 3.5vw;
    }

    .content {
      font-size: 2.5vw;
      margin-top: 12%;
    }

    .button {
      font-size: 2vw;
      padding: 8px 12px;
    }
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
      margin-bottom: 8px;
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 92vw;
    }

    .head {
      font-size: 7vw;
    }

    .content {
      font-size: 4.5vw;
      margin-top: 8%;
      padding: 4% 5%;
    }

    .button {
      font-size: 3.5vw;
      padding: 8px 12px;
      margin-bottom: 6px;
      display: block;
      width: 100%;
      max-width: 200px;
    }
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 10%;
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

  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    padding: 12px; /* Slightly smaller padding */
    .modal {
      font-size: 1.2rem; /* Slightly smaller text for tablets */
    }
  }

  @media (max-width: 480px) {
    width: 80%; /* Take up more space on smaller screens */
    padding: 10px; /* Reduce padding on mobile */
    .modal {
      font-size: 1rem; /* Smaller font size for mobile */
    }
  }
`;

export default Card;
