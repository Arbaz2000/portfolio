"use client";
import React from "react";
import styled from "styled-components";
import { FaWater } from "react-icons/fa"; // Water icon
const Flipcard = dynamic(() => import("@/component/filpcard"), { ssr: false });
import dynamic from "next/dynamic";
import Image from "next/image";

const links = [
  {
    label: "Web",
    url: "https://github.com/Arbaz2000/cultural-glam/tree/cultural-glam",
  },
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
     
    </StyledWrapper>
  );
};

// Card Component - For the project card at the top
const CardComponent = () => (
  <div className="card">
    <div className="card-header">
      <div className="project-icon">
        <FaWater size={50} color="white" />
      </div>
      <div className="project-name">
        <p>E-Commerce Boilerplate</p>
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
      <strong>E-Commerce Boilerplate</strong> is a fully responsive and
      customizable e-commerce application built using <strong>Next.js</strong>.
      The project provides a ready-to-use structure for building online stores,
      with integrated payment functionality and support for various device
      resolutions (both mobile and desktop). It is hosted on{" "}
      <strong>AWS Amplify</strong>, ensuring scalability and ease of deployment.
    </p>
    <h4>Tech Stack</h4>
    <ul>
      <li>
        <strong>Frontend:</strong> Next.js (React)
      </li>
      <li>
        <strong>Payment Integration:</strong> Stripe API
      </li>
      <li>
        <strong>Deployment:</strong> AWS Amplify (Frontend & Backend)
      </li>
      <li>
        <strong>Database:</strong> MongoDB (NoSQL) or any other preferred DB
      </li>
      <li>
        <strong>Authentication:</strong> AWS Cognito (for user management)
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
        This e-commerce boilerplate streamlines the process of setting up an
        online store. It includes user authentication, product catalog, shopping
        cart functionality, and order processing. Key features include:
      </p>
      <ul>
        <li>
          <strong>Responsive Design:</strong> The application is designed to be
          fully responsive, adapting seamlessly to both mobile devices and
          larger screens.
        </li>
        <li>
          <strong>Payment Integration:</strong> Stripe integration for secure
          payment processing.
        </li>
        <li>
          <strong>Real-time Updates:</strong> Automatic updates of inventory and
          order status.
        </li>
        <li>
          <strong>Admin Dashboard:</strong> Admin panel for managing products,
          orders, and user information.
        </li>
      </ul>
    </div>
    <div>
      <h4 className="mt-4">More Details</h4>
      <p>
        The application is built using <strong>Next.js</strong>, which provides
        server-side rendering (SSR) for faster loading times and better SEO
        performance. The entire project is hosted and managed through{" "}
        <strong>AWS Amplify</strong>, which handles both frontend and backend
        processes. This ensures that the application is highly scalable and
        easily deployed. The project also includes basic CRUD operations for
        managing products and orders, as well as payment processing using the{" "}
        <strong>Stripe API</strong>.
      </p>
    </div>
    <h4 className="mt-4">Key Features</h4>
    <ul>
      <li>
        <strong>Responsive Design:</strong> Fully responsive across all devices,
        ensuring a smooth user experience on mobile, tablet, and desktop.
      </li>
      <li>
        <strong>Stripe Payment Integration:</strong> Secure, easy-to-implement
        payment gateway for seamless transactions.
      </li>
      <li>
        <strong>Authentication with AWS Cognito:</strong> Secure user
        authentication and authorization for customers.
      </li>
      <li>
        <strong>Product Management:</strong> Easily manage products, inventory,
        and product details via an admin dashboard.
      </li>
      <li>
        <strong>Order Tracking:</strong> Users can track their orders in
        real-time from checkout to delivery.
      </li>
      <li>
        <strong>AWS Amplify Hosting:</strong> Scalable hosting solution for
        frontend and backend.
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
        src="/projectImages/ecommerceBoilerPlate/Ehome.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={400} // Default height
        priority
      />
      <Image
        src="/projectImages/ecommerceBoilerPlate/Eprouct.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={400} // Default height
        priority
      />
      <Image
        src="/projectImages/ecommerceBoilerPlate/Ereview.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={400} // Default height
        priority
      />
      <Image
        src="/projectImages/ecommerceBoilerPlate/Eshoppingcart.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={400} // Default height
        priority
      />
      <Image
        src="/projectImages/ecommerceBoilerPlate/Esideview.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={400} // Default height
        priority
      />
      <Image
        src="/projectImages/ecommerceBoilerPlate/Etab.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={400} // Default height
        priority
      />
    </div>
  </div>
);


// Styled Wrapper Component with variables for shared styles
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #919191;
  padding: 2rem;
  gap: 1rem;

  /* Color Variables */
  --primary-color: #665858;
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
    width: 30%;
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
      max-width: 450px;
    }
  }
`;

export default Card;
