import React, { useContext, createContext, useCallback, useState } from "react";

interface BottomContext {
  show(): void;
  hide(): void;
  showBottomTab: boolean;
}

export const BarBottomContex = createContext<BottomContext>(
  {} as BottomContext
);

export const BottomProvider: React.FC = ({ children }) => {
  const [showBottomTab, setShowBottomTab] = useState(true);
  const show = useCallback(() => {
    setShowBottomTab(true);
  }, []);
  const hide = useCallback(() => {
    setShowBottomTab(false);
  }, []);

  return (
    <BarBottomContex.Provider value={{ show, hide, showBottomTab }}>
      {children}
    </BarBottomContex.Provider>
  );
};

export function useBottomTab(): BottomContext {
  const context = useContext(BarBottomContex);
  if (!context) {
    throw new Error("useBottomTab is being used outside of BarBottomContex");
  }
  return context;
}
