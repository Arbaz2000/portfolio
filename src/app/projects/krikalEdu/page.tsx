"use client";
import React from "react";
import styled from "styled-components";
import { FaPenFancy, FaWater } from "react-icons/fa"; // Water icon
import Flipcard from "@/component/filpcard";
import Image from "next/image";
import { FaPen, FaPenClip } from "react-icons/fa6";

const links = [
  { label: "Web", url: "https://github.com/Arbaz2000/krikal-EDU" },
];

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card-container">
        <CardComponent />
        <ProjectOverview />
      </div>

      <MoreDetails />
      <ImagesSection />
      <ClientNote />
    </StyledWrapper>
  );
};

// Card Component - For the project card at the top
const CardComponent = () => (
  <div className="card">
    <div className="card-header">
      <div className="project-icon">
        <FaPenClip size={50} color="white" />
      </div>
      <div className="project-name">
        <p>Krikal Education</p>
      </div>
    </div>
    <div>
      <Flipcard links={links} coverText="View on GitHub" />
    </div>
  </div>
);

// Project Overview Section
const ProjectOverview = () => (
  <div className="project-overview">
    <h3>Project Overview</h3>
    <p>
      <strong>Krikal Education</strong> is an interactive educational platform
      that helps users prepare for interviews by simulating real-world interview
      scenarios. It uses the Gemini API to conduct mock interviews and provides
      users with feedback and a rating based on the AI's expertise. The website
      is built with Next.js and completely developed with TypeScript, ensuring
      great performance, type safety, and SEO friendliness. It is hosted on
      Amplify for efficient and reliable deployment.
    </p>
    <h4>Tech Stack</h4>
    <ul>
      <li>
        <strong>Frontend:</strong> Next.js (SEO Optimized)
      </li>
      <li>
        <strong>Frontend Language:</strong> TypeScript (for type safety)
      </li>
      <li>
        <strong>Backend:</strong> Node.js (API integration with Gemini AI)
      </li>
      <li>
        <strong>Database:</strong> MongoDB (for user profiles and interview
        logs)
      </li>
      <li>
        <strong>Hosting:</strong> AWS Amplify (for scalable hosting)
      </li>
    </ul>
  </div>
);

// More Details Section
const MoreDetails = () => (
  <div className="more-details">
    <div>
      <h4>How It Works</h4>
      <p>
        Krikal Education allows users to practice and improve their interview
        skills:
      </p>
      <ul>
        <li>
          <strong>AI Interviewer:</strong> Uses the Gemini API to conduct mock
          interviews.
        </li>
        <li>
          <strong>Real-Time Feedback:</strong> The AI rates the user’s
          performance and provides tips.
        </li>
        <li>
          <strong>Performance Analysis:</strong> Detailed feedback and ratings
          based on AI expertise.
        </li>
      </ul>
    </div>
    <div>
      <h4 className="mt-4">More Details</h4>
      <p>
        Krikal Education is designed for users to hone their interview skills.
        It’s powered by Gemini API for advanced AI capabilities, while Next.js
        ensures the website is fast, responsive, and optimized for search
        engines. Developed entirely in TypeScript for type safety and better
        code quality. Hosted on AWS Amplify, the site is both scalable and
        secure.
      </p>
    </div>
    <h4 className="mt-4">Key Features</h4>
    <ul>
      <li>
        <strong>Gemini AI Interviewer:</strong> Conducts mock interviews and
        rates the user's performance.
      </li>
      <li>
        <strong>TypeScript:</strong> The entire project is developed in
        TypeScript for better code reliability and type safety.
      </li>
      <li>
        <strong>SEO Friendly:</strong> Built with Next.js for optimal search
        engine visibility.
      </li>
      <li>
        <strong>MongoDB Database:</strong> Stores user profiles and interview
        records.
      </li>
      <li>
        <strong>AWS Hosting:</strong> Deployed on Amplify for a fast and
        scalable platform.
      </li>
    </ul>
  </div>
);

// Images Section
const ImagesSection = () => (
  <div className="images-section">
    <h4>App Screenshots</h4>
    <div className="images">
      <Image
        src="/projectImages/krikaledu/home.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={300} // Default height
        priority
      />
      <Image
        src="/projectImages/krikaledu/home1.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={300} // Default height
        priority
      />
      <Image
        src="/projectImages/krikaledu/home3.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={300} // Default height
        priority
      />
      <Image
        src="/projectImages/krikaledu/home4.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={300} // Default height
        priority
      />
      <Image
        src="/projectImages/krikaledu/home5.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={300} // Default height
        priority
      />
      <Image
        src="/projectImages/krikaledu/home6.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={300} // Default height
        priority
      />
    </div>
  </div>
);

// Client Note Section
const ClientNote = () => (
  <div className="client-note">
    <p>
      <strong>Note:</strong> This project was created for a client
    </p>
  </div>
);

// Styled Wrapper Component with variables for shared styles
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #023c86;
  padding: 2rem;
  gap: 1rem;

  /* Color Variables */
  --primary-color: #2c427d;
  --secondary-color: #05060f;
  --text-color: white;
  --border-radius: 1rem;
  --shadow: 0.4rem 0.4rem #05060f;

  /* Card Styling */
  .card-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
    gap: 1rem;
  }

  .card {
    width: 250px;
    background: var(--primary-color);
    padding: 1rem;
    border-radius: var(--border-radius);
    border: 0.5vmin solid var(--secondary-color);
    box-shadow: var(--shadow);
    color: black;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .project-icon {
    background-color: var(--secondary-color);
    border-radius: 50%;
    padding: 0.5rem;
  }

  .project-name p {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text-color);
  }

  /* Common Section Styling */
  .project-overview,
  .more-details,
  .images-section,
  .repo-section,
  .client-note {
    width: 90%;
    background: #faf9f6;
    padding: 1rem;
    border-radius: var(--border-radius);
    border: 0.5vmin solid var(--secondary-color);
    box-shadow: var(--shadow);
    color: black;
  }

  .project-overview h3,
  .more-details h4,
  .images-section h4,
  .repo-section h4,
  .client-note p {
    font-size: 1.5rem;
    font-weight: bold; /* Ensures the headings are bold */
  }

  /* Images Section */
  .images-section .images {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
  }

  .images-section img {
    width: 100%; /* Allow images to scale with container width */
    max-width: 500px; /* Ensure images do not exceed this width */
    height: auto;
    max-height: 200px;
    border-radius: 0.5rem;
    box-shadow: 0.2rem 0.2rem var(--secondary-color);
    transition: transform 0.3s ease-in-out;
    transform-origin: center center;
    object-fit: cover; /* Ensure the image fills the container without distortion */
  }

  .images-section img:hover {
    transform: scale(1.5);
    transition: transform 0.3s ease-in-out;
    z-index: 10;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .images-section img {
      max-width: 100%; /* Ensure images are full width on smaller screens */
      max-height: 150px; /* Adjust max height for smaller screens */
    }
  }

  @media (max-width: 768px) {
    .card-container {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .card,
    .project-overview,
    .more-details,
    .images-section,
    .repo-section,
    .client-note {
      width: 100%;
      max-width: 350px;
    }
  }
`;

export default Card;
