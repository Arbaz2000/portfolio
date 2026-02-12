"use client";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHomeTheme } from "@/context/HomeThemeContext";

const Card = () => {
  const { theme } = useHomeTheme();
  const [email, setEmail] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    const templateParams = {
      to_name: "Recipient Name",
      user_email: email,
      feedback_message: feedback,
    };

    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
          template_params: templateParams,
        }
      );

      if (response.status === 200) {
        console.log("Email sent successfully:", response);
      } else {
        setError("There was an issue with the request.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setError("Failed to send the email. Please try again.");
    }
  };

  return (
    <StyledWrapper $theme={theme}>
      <div className="card">
        <span className="card__title">Want to connect?</span>
        <p className="card__content">
          You can give me your valuable feedback, and it will be sent to my
          official email.
        </p>

        {error && <p className="error">{error}</p>}

        <form className="card__form" onSubmit={handleSubmit}>
          <input
            required
            type="email"
            placeholder="Your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            placeholder="Your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button type="submit" className="card__button">
            Send me
          </button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $theme: any }>`
  padding: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }

  .card {
    width: 90%;
    height: auto;
    padding: 20px;
    background: #ffffff;
    border: 6px solid ${(props) => props.$theme.colors.border};
    box-shadow: 12px 12px 0 ${(props) => props.$theme.colors.shadow};
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px) {
      width: 100%;
      padding: 15px;
      border: 4px solid ${(props) => props.$theme.colors.border};
      box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
    }

    @media (max-width: 480px) {
      padding: 12px;
      border: 3px solid ${(props) => props.$theme.colors.border};
      box-shadow: 4px 4px 0 ${(props) => props.$theme.colors.shadow};
    }
  }

  .card:hover {
    transform: translate(-5px, -5px);
    box-shadow: 17px 17px 0 ${(props) => props.$theme.colors.shadow};

    @media (max-width: 768px) {
      transform: translate(-3px, -3px);
      box-shadow: 9px 9px 0 ${(props) => props.$theme.colors.shadow};
    }

    @media (max-width: 480px) {
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
    }
  }

  .card__title {
    font-size: 32px;
    font-weight: 900;
    color: ${(props) => props.$theme.colors.text};
    text-transform: uppercase;
    margin-bottom: 15px;
    display: block;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 12px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  .card__title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 90%;
    height: 3px;
    background-color: ${(props) => props.$theme.colors.border};
    transform: translateX(-100%);
    transition: transform 0.3s;

    @media (max-width: 480px) {
      height: 2px;
    }
  }

  .card:hover .card__title::after {
    transform: translateX(0);
  }

  .card__content {
    font-size: 16px;
    line-height: 1.4;
    color: ${(props) => props.$theme.colors.text};
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 15px;
    }

    @media (max-width: 480px) {
      font-size: 13px;
      margin-bottom: 12px;
    }
  }

  .card__form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 768px) {
      gap: 12px;
    }

    @media (max-width: 480px) {
      gap: 10px;
    }
  }

  .card__form input {
    padding: 10px;
    border: 3px solid ${(props) => props.$theme.colors.border};
    font-size: 16px;
    font-family: inherit;
    transition: transform 0.3s;
    width: calc(100% - 26px);
    color: ${(props) => props.$theme.colors.text};

    @media (max-width: 768px) {
      padding: 8px;
      font-size: 14px;
      width: calc(100% - 22px);
      border: 2px solid ${(props) => props.$theme.colors.border};
    }

    @media (max-width: 480px) {
      padding: 7px;
      font-size: 13px;
      width: calc(100% - 20px);
    }
  }

  .card__form input:focus {
    outline: none;
    transform: scale(1.05);
    background-color: ${(props) => props.$theme.colors.border};
    color: #ffffff;

    @media (max-width: 768px) {
      transform: scale(1.02);
    }
  }

  .card__button {
    border: 3px solid ${(props) => props.$theme.colors.border};
    background: ${(props) => props.$theme.colors.border};
    color: #fff;
    padding: 10px;
    font-size: 18px;
    left: 20%;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
    width: 50%;
    height: 100%;

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 9px;
      width: 60%;
      left: 10%;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      padding: 8px;
      width: 80%;
      left: 0;
      margin: 0 auto;
    }
  }

  .card__button::before {
    content: "Sure?";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 105%;
    background-color: ${(props) => (props.$theme.name === 'neo-brutalism' ? '#5ad641' : '#666666')};
    color: ${(props) => props.$theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    transition: transform 0.3s;
  }

  .card__button:hover::before {
    transform: translateY(0);
  }

  .card__button:active {
    transform: scale(0.95);
  }

  @keyframes glitch {
    0% {
      transform: translate(2px, 2px);
    }
    25% {
      transform: translate(-2px, -2px);
    }
    50% {
      transform: translate(-2px, 2px);
    }
    75% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(2px, 2px);
    }
  }

  .glitch {
    animation: glitch 0.3s infinite;
  }

  .error {
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export default Card;
