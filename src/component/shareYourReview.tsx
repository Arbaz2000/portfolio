import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Card = () => {
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
    <StyledWrapper>
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

const StyledWrapper = styled.div`
  padding: 2rem;
  gap: 1rem;
  .card {
    width: 90%;
    height: auto;
    padding: 20px;
    background: #fff;
    border: 6px solid #000;
    box-shadow: 12px 12px 0 #000;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .card:hover {
    transform: translate(-5px, -5px);
    box-shadow: 17px 17px 0 #000;
  }

  .card__title {
    font-size: 32px;
    font-weight: 900;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 15px;
    display: block;
    position: relative;
    overflow: hidden;
  }

  .card__title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 90%;
    height: 3px;
    background-color: #000;
    transform: translateX(-100%);
    transition: transform 0.3s;
  }

  .card:hover .card__title::after {
    transform: translateX(0);
  }

  .card__content {
    font-size: 16px;
    line-height: 1.4;
    color: #000;
    margin-bottom: 20px;
  }

  .card__form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .card__form input {
    padding: 10px;
    border: 3px solid #000;
    font-size: 16px;
    font-family: inherit;
    transition: transform 0.3s;
    width: calc(100% - 26px);
    color: #000; /* Set input text color to black */
  }

  .card__form input:focus {
    outline: none;
    transform: scale(1.05);
    background-color: #000;
    color: #ffffff;
  }

  .card__button {
    border: 3px solid #000;
    background: #000;
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
  }

  .card__button::before {
    content: "Sure?";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 105%;
    background-color: #5ad641;
    color: #000;
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
`;

export default Card;
