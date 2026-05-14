"use client";
import React from "react";
import styled from "styled-components";
import { GitHubCalendar } from "react-github-calendar";
import { useHomeTheme } from "@/context/HomeThemeContext";

const TerminalWrapper = styled.div<{ $theme: any }>`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  background: #0d1117; /* Terminal dark background */
  border: 3px solid ${(props) => props.$theme.colors.border};
  box-shadow: 8px 8px 0 ${(props) => props.$theme.colors.shadow};
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  color: #c9d1d9; /* Terminal text color */

  .terminal-header {
    display: flex;
    align-items: center;
    background: #161b22;
    padding: 10px 15px;
    border-bottom: 2px solid #30363d;

    .buttons {
      display: flex;
      gap: 8px;

      .btn {
        width: 14px;
        height: 14px;
        border-radius: 50%;
      }
      .close { background: #ff5f56; }
      .minimize { background: #ffbd2e; }
      .maximize { background: #27c93f; }
    }

    .title {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: #8b949e;
      font-weight: 600;
      margin-left: -50px; /* Offset to center text properly considering the buttons */
    }
  }

  .terminal-body {
    padding: 20px;
    
    .prompt-line {
      display: flex;
      gap: 10px;
      margin-bottom: 25px;
      font-size: 16px;
      
      .prompt {
        color: #7ee787; /* Green for user */
        font-weight: bold;
      }
      .command {
        color: #c9d1d9;
      }
    }
  }

  .heatmap-container {
    overflow-x: auto;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-bottom: 10px;

    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* WebKit */
    }

    /* Target the internal wrapper from react-github-calendar */
    * {
      scrollbar-width: none !important;
      -ms-overflow-style: none !important;
      &::-webkit-scrollbar {
        display: none !important;
      }
    }
    
    & > article {
      width: 100%;
    }
  }
`;

export default function GithubHeatMap() {
  const { theme } = useHomeTheme();

  return (
    <TerminalWrapper $theme={theme}>
      <div className="terminal-header">
        <div className="buttons">
          <div className="btn close"></div>
          <div className="btn minimize"></div>
          <div className="btn maximize"></div>
        </div>
        <div className="title">bash - github/calendar</div>
      </div>
      <div className="terminal-body">
        <div className="prompt-line">
          <span className="prompt">arbaz@portfolio:~$</span>
          <span className="command">./github_stats.sh --user Arbaz2000</span>
        </div>
        <div className="heatmap-container">
          <GitHubCalendar 
            username="Arbaz2000" 
            colorScheme="dark"
            blockSize={15}
            blockMargin={5}
            fontSize={14}
          />
        </div>
      </div>
    </TerminalWrapper>
  );
}
