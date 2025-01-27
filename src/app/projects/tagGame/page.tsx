"use client";
import React from "react";
import styled from "styled-components";
import { FaGamepad, FaWater } from "react-icons/fa"; // Water icon
import Flipcard from "@/component/filpcard";
import Image from "next/image";

const links = [
  { label: "Unity-hub", url: "https://github.com/Arbaz2000/Tag-Game" },
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
        <FaGamepad size={50} color="white" />
      </div>
      <div className="project-name">
        <p>3D Tag Game</p>
      </div>
    </div>
    <div>
      <Flipcard links={links} coverText="Play the Game" />
    </div>
  </div>
);

// Project Overview Section
const ProjectOverview = () => (
  <div className="project-overview">
    <h3>Project Overview</h3>
    <p>
      <strong>3D Tag Game</strong> is an exciting 3D game built in Unity, where
      players engage in a game of tag with an AI bot. The objective is to
      collect all the Orbs on the screen before the bot catches the player. The
      environment contains various obstacles, some of which are movable, to make
      the gameplay more challenging.
    </p>
    <h4>Tech Stack</h4>
    <ul>
      <li>
        <strong>Game Engine:</strong> Unity
      </li>
      <li>
        <strong>Programming Language:</strong> C#
      </li>
      <li>
        <strong>Game Type:</strong> 3D Game (Single-player)
      </li>
      <li>
        <strong>Executable Game:</strong> Playable locally
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
        The game revolves around a player trying to avoid being caught by an AI bot while collecting all the Orbs scattered around the environment:
      </p>
      <ul>
        <li>
          <strong>Player:</strong> Controls the character and collects Orbs while avoiding the bot.
        </li>
        <li>
          <strong>AI Bot:</strong> Follows the player and tries to catch them. If the bot catches the player, they lose.
        </li>
        <li>
          <strong>Obstacles:</strong> Various 3D obstacles, including movable ones, that block the bot's and player's movements.
        </li>
      </ul>
    </div>
    <div>
      <h4 className="mt-4">More Details</h4>
      <p>
        The game was developed in Unity using C# scripting. The main features include AI pathfinding, player control using standard Unity input methods, and dynamic obstacle behavior. The goal is to create an engaging and challenging experience for players as they try to collect all Orbs before being tagged by the bot.
      </p>
    </div>
    <h4 className="mt-4">Key Features</h4>
    <ul>
      <li>
        <strong>3D Gameplay:</strong> The game is fully 3D with dynamic environments and obstacles.
      </li>
      <li>
        <strong>AI Bot:</strong> Intelligent AI bot that hunts the player.
      </li>
      <li>
        <strong>Movable Obstacles:</strong> Obstacles that add an extra layer of strategy to the gameplay.
      </li>
      <li>
        <strong>Collectible Orbs:</strong> Players need to collect all the Orbs to win.
      </li>
      <li>
        <strong>Unity & C#:</strong> Developed in Unity using C# for scripting and game logic.
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
        src="/projectImages/tagGame/home.png" // Fixed the path here
        alt="Web Screenshot"
        width={1000} // Default width
        height={300} // Default height
        priority
      />
      <Image
        src="/projectImages/tagGame/lose.png"
        alt="App Login Screenshot"
        width={500} // Default width
        height={300} // Default height
        priority
      />
      <Image
        src="/projectImages/tagGame/play.png"
        alt="App Map Screenshot"
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
      <strong>Note:</strong> This project was created for fun and learning experience.
    </p>
  </div>
);

// Styled Wrapper Component with variables for shared styles
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #157fae;
  padding: 2rem;
  gap: 1rem;

  /* Color Variables */
  --primary-color: #306dfc;
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
    width: auto;
    max-width: 500px;
    height: auto;
    max-height: 200px;
    border-radius: 0.5rem;
    box-shadow: 0.2rem 0.2rem var(--secondary-color);
    transition: transform 0.3s ease-in-out; /* Smooth transition for scaling */
    transform-origin: center center; /* Start zooming from the center of the image */
  }

  .images-section img:hover {
    transform: scale(1.5); /* Zoom in effect */
    transition: transform 0.3s ease-in-out; /* Apply smooth transition on hover */
    z-index: 10; /* Ensures the zoomed image stays on top */
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
