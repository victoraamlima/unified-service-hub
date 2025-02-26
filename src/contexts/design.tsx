import { createContext, useContext, useState, ReactNode } from "react";
import colors from "@/json/themesColors.json";

interface ThemeObject {
  theme: string;
  colors: typeof colors;
}

interface AppDesignContextType {
  themeObject: ThemeObject;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const AppDesignContext = createContext<AppDesignContextType | undefined>(undefined);

export function AppDesignProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  const themeObject = { theme, colors };

  return (
    <AppDesignContext.Provider value={{ themeObject, setTheme }}>
      {children}
    </AppDesignContext.Provider>
  );
}

export function useAppDesignContext() {
  const context = useContext(AppDesignContext);

  if (!context) {
    throw new Error(
      "useAppDesignContext must be used within a AppDesignProvider"
    );
  }

  return context;
}
