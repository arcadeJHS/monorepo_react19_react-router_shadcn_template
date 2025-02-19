import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  availableThemes?: string[];
  defaultTheme?: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ 
  children,
  availableThemes = [], 
  defaultTheme = ''
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(defaultTheme);

  useEffect(() => {
    const root = document.documentElement;
    // Remove previously set theme classes if any
    availableThemes.forEach((t) => root.classList.remove(t));
    // Apply new theme class based on theme state
    if (availableThemes.includes(theme)) {
      root.classList.add(theme);
    }
  }, [theme, availableThemes]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};