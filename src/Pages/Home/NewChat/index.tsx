import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { useBottomTab } from "../../../Hooks/BarBottomTab";

const App: React.FC = () => {
  const { hide } = useBottomTab();

  useEffect(() => {
    hide();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Navegação do NewChat!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});

export default App;
