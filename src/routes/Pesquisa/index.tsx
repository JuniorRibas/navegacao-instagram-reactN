import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Pesquisa from "../../Pages/Pesquisa/Principal";

const Inicial = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pesquisa" component={Pesquisa} />
    </Stack.Navigator>
  );
};

export default Inicial;
