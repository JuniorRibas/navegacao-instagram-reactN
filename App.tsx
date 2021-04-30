import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Aplication from "./src/routes/Incial";
import ProviderContext from "./src/Hooks";

export default function App() {
  return (
    <ProviderContext>
      <Aplication />
    </ProviderContext>
  );
}
