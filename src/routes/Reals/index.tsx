import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Reals from "../../Pages/Reals/Principal";

const Inicial = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Reals" component={Reals} />
    </Stack.Navigator>
  );
};

export default Inicial;
