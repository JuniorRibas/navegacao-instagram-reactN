import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Pesquisa Princiais!</Text>
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
