"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Theme {
  name: string;
  colors: {
    primary: string;
    background: string;
    cardHeader: string;
    border: string;
    shadow: string;
    text: string;
    accent?: string;
  };
}

const neoBrutalismTheme: Theme = {
  name: "neo-brutalism",
  colors: {
    primary: "#ff66a3",
    background: "#CADF9E",
    cardHeader: "#ffffff",
    border: "#000000",
    shadow: "#000000",
    text: "#000000",
  },
};

const monochromeTheme: Theme = {
  name: "monochrome",
  colors: {
    primary: "#ffffff",
    background: "#f5f5f5",
    cardHeader: "#000000",
    border: "#000000",
    shadow: "#333333",
    text: "#000000",
    accent: "#666666",
  },
};

interface HomeThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isNeoBrutalism: boolean;
}

const HomeThemeContext = createContext<HomeThemeContextType | undefined>(
  undefined
);

export const HomeThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(neoBrutalismTheme);

  const toggleTheme = () => {
    setCurrentTheme((prev) =>
      prev.name === "neo-brutalism" ? monochromeTheme : neoBrutalismTheme
    );
  };

  const isNeoBrutalism = currentTheme.name === "neo-brutalism";

  return (
    <HomeThemeContext.Provider value={{ theme: currentTheme, toggleTheme, isNeoBrutalism }}>
      {children}
    </HomeThemeContext.Provider>
  );
};

export const useHomeTheme = () => {
  const context = useContext(HomeThemeContext);
  if (context === undefined) {
    throw new Error("useHomeTheme must be used within a HomeThemeProvider");
  }
  return context;
};
