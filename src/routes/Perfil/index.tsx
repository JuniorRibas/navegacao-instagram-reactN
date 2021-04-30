import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Perfil from "../../Pages/Perfil/Principal";

const Inicial = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
};

export default Inicial;
