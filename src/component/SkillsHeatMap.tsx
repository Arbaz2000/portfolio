"use client";
import React from "react";
import styled from "styled-components";
import { HeatMap } from "@/components/ui/heat-map";
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
  }
`;

import { projects } from "@/constants/projects";

const rowLabels = ["React", "Next.js", "Node.js", "TypeScript", "AWS", "React Native"];
const colLabels = ["2021", "2022", "2023", "2024", "2025"];

const generateHeatMapData = () => {
  const data = rowLabels.map(() => colLabels.map(() => 0));

  projects.forEach((project) => {
    const yearIdx = colLabels.indexOf(String(project.year));
    if (yearIdx === -1) return;

    project.techStack.forEach((tech) => {
      // Normalize tech names (e.g., React-Native -> React Native)
      const normalizedTech = tech.replace("-", " ");
      const skillIdx = rowLabels.indexOf(normalizedTech);
      
      if (skillIdx !== -1) {
        // Accumulate intensity based on project count (each project adds 25% intensity)
        data[skillIdx][yearIdx] = Math.min(100, data[skillIdx][yearIdx] + 25);
      }
    });
  });

  return data;
};

const skillsData = generateHeatMapData();

export default function SkillsHeatMap() {
  const { theme } = useHomeTheme();

  return (
    <TerminalWrapper $theme={theme}>
      <div className="terminal-header">
        <div className="buttons">
          <div className="btn close"></div>
          <div className="btn minimize"></div>
          <div className="btn maximize"></div>
        </div>
        <div className="title">bash - termcn/heat-map</div>
      </div>
      <div className="terminal-body">
        <div className="prompt-line">
          <span className="prompt">arbaz@portfolio:~$</span>
          <span className="command">./show_skills.sh --heatmap</span>
        </div>
        <div className="heatmap-container">
          <HeatMap
            data={skillsData}
            rowLabels={rowLabels}
            colLabels={colLabels}
            cellWidth={6}
            showValues={true}
          />
        </div>
      </div>
    </TerminalWrapper>
  );
}
