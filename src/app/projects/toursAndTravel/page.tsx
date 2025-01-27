"use client";
import React from "react";
import styled from "styled-components";
import { FaSuitcase, FaWater } from "react-icons/fa"; // Water icon
import Flipcard from "@/component/filpcard";
import Image from "next/image";

const links = [
  { label: "Web", url: "https://github.com/Arbaz2000/cultural-glam" },

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
        <FaSuitcase size={50} color="white" />
      </div>
      <div className="project-name">
        <p>Tours & Travel</p>
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
      This website is created in <strong>Next.js</strong>, utilizing its SEO-friendly features to ensure better visibility. It includes multiple pages, which showcase the tools and travel packages provided by the company. Built using <strong>React</strong> and deployed through <strong>Vercel</strong>, the site offers a seamless user experience. The website also displays reviews from previous users of the travel agency, helping potential clients make informed decisions.
    </p>
    <h4>Tech Stack</h4>
    <ul>
      <li>
        <strong>Frontend:</strong> React
      </li>
      <li>
        <strong>Framework:</strong> Next.js
      </li>
      <li>
        <strong>Deployment:</strong> Vercel
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
        This platform provides detailed travel packages, as well as customer reviews for prospective travelers:
      </p>
      <ul>
        <li>
          <strong>Travel Packages:</strong> Users can browse and book different travel packages, each with detailed information.
        </li>
        <li>
          <strong>Customer Reviews:</strong> Previous clients can share their feedback, helping others make better travel decisions.
        </li>
        <li>
          <strong>SEO-Optimized:</strong> With Next.js, the website is fully optimized for search engines to help attract more visitors.
        </li>
      </ul>
    </div>
    <div>
      <h4 className="mt-4">More Details</h4>
      <p>
        The website leverages the power of Next.js for fast page loading and SEO optimization. It showcases various travel tools and packages for users, while also incorporating customer reviews to build trust and transparency. Hosted and deployed on Vercel for reliable performance and scalability.
      </p>
    </div>
    <h4 className="mt-4">Key Features</h4>
    <ul>
      <li>
        <strong>Next.js Framework:</strong> Provides optimized routing and SEO features.
      </li>
      <li>
        <strong>React Frontend:</strong> Powers the dynamic components and user interface.
      </li>
      <li>
        <strong>Customer Reviews:</strong> Displays feedback from past users to ensure transparency.
      </li>
      <li>
        <strong>Vercel Deployment:</strong> Ensures fast, reliable, and scalable hosting.
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
        src="/projectImages/toursAndTravel/home.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={300} // Default height
        priority
      />
      <Image
        src="/projectImages/toursAndTravel/home2.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={300} // Default height
        priority
      />
      <Image
        src="/projectImages/toursAndTravel/enjoy.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={300} // Default height
        priority
      />
      <Image
        src="/projectImages/toursAndTravel/explore.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={300} // Default height
        priority
      />
      <Image
        src="/projectImages/toursAndTravel/contactus.png" // Fixed the path here
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
      <strong>Note:</strong> This project was created for a client to help
     Attract more users towards their business.
    </p>
  </div>
);

// Styled Wrapper Component with variables for shared styles
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d38a36;
  padding: 2rem;
  gap: 1rem;

  /* Color Variables */
  --primary-color: #75472b;
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
