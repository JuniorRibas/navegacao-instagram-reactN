import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Loja from "../../Pages/Loja/Principal";

const Inicial = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loja" component={Loja} />
    </Stack.Navigator>
  );
};

export default Inicial;
