"use client";
import React from "react";
import styled from "styled-components";
import { FaShoppingCart, FaWater } from "react-icons/fa"; // Water icon
import Flipcard from "@/component/filpcard";
import Image from "next/image";

const links = [
  { label: "Web", url: "https://github.com/harshendraup/WaterCan-web" },
  { label: "Admin-Panel", url: "https://github.com/kajal-sharma007/WaterCanApp" },
]

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
        <FaShoppingCart size={50} color="white" />
      </div>
      <div className="project-name">
        <p>Ecommerce Platform</p>
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
      <strong>Ecommerce Platform</strong> is a comprehensive online store management system where an admin panel manages product inventory, product edition, and removal. The platform uses AWS EC2 for backend services and AWS S3 for storing product images. I played a significant role in enhancing the UI of the admin panel, improving the user experience, and adding functionalities such as transaction histories, charts, and user location tracking for marketing insights.
    </p>
    <h4>Tech Stack</h4>
    <ul>
      <li>
        <strong>Frontend:</strong> React
      </li>
      <li>
        <strong>Styling:</strong> Bootstrap
      </li>
      <li>
        <strong>Backend:</strong> Node.js (EC2)
      </li>
      <li>
        <strong>Database:</strong> MySQL
      </li>
      <li>
        <strong>Cloud Storage:</strong> AWS S3 (Product Images)
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
        This eCommerce platform is designed to streamline the management of products and transactions:
      </p>
      <ul>
        <li>
          <strong>Admin Panel:</strong> Used for managing product inventory, editing or removing products, and viewing transaction histories.
        </li>
        <li>
          <strong>UI Enhancements:</strong> Focused on improving the user experience within the admin panel using React and Bootstrap.
        </li>
        <li>
          <strong>User Location Tracking:</strong> Provides insights for marketing research by tracking user location data.
        </li>
      </ul>
    </div>
    <div>
      <h4 className="mt-4">More Details</h4>
      <p>
        The platform’s admin panel allows for easy and efficient management of products, transactions, and user data. The UI has been optimized for better usability, with Bootstrap ensuring a responsive and mobile-friendly layout. The backend is powered by Node.js, while product images are stored securely on AWS S3, with real-time data management from MongoDB.
      </p>
    </div>
    <h4 className="mt-4">Key Features</h4>
    <ul>
      <li>
        <strong>Admin Panel:</strong> Allows the admin to manage product listings, track transactions, and view analytics.
      </li>
      <li>
        <strong>UI Enhancements:</strong> Improved UI in the admin panel using React and Bootstrap for better navigation and accessibility.
      </li>
      <li>
        <strong>User Location Tracking:</strong> Tracks user location for targeted marketing and analytics.
      </li>
      <li>
        <strong>Node.js Backend:</strong> Handles API requests, user authentication, and transactions.
      </li>
      <li>
        <strong>mySql Database:</strong> Stores product, user, and transaction data for easy retrieval and management.
      </li>
      <li>
        <strong>AWS Hosting:</strong> Deployed on EC2 for the backend and S3 for secure image storage.
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
        src="/projectImages/hirangna/homePage.jpg" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={300} // Default height
        priority
      />
      <Image
        src="/projectImages/hirangna/login.jpg" // Fixed the path here
        alt="App Login Screenshot"
        width={500} // Default width
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
      <strong>Note:</strong> This project was created for a client to help
      manage their water delivery system more efficiently.
    </p>
  </div>
);

// Styled Wrapper Component with variables for shared styles
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff0da;
  padding: 2rem;
  gap: 1rem;

  /* Color Variables */
  --primary-color: #b2776f;
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
