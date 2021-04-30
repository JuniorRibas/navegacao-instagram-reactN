import React from "react";

import { BottomProvider } from "./BarBottomTab";

const AppProvider: React.FC = ({ children }) => {
  return <BottomProvider>{children}</BottomProvider>;
};

export default AppProvider;
