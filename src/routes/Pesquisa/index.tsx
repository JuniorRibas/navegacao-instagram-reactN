import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Pesquisa from "../../Pages/Pesquisa/Principal";

import HeaderLeft from "./../../Components/Routes/Pesquisa/StackPesquisa/HeaderLeft";
import HeaderTab from "./../../Components/Routes/Pesquisa/StackTabs/Header";

import RouterTabsPesquisa from "./TabPesquisa";

const Inicial = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pesquisa"
        component={Pesquisa}
        options={{
          title: "",
          header: () => {
            return <HeaderLeft />;
          },
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={RouterTabsPesquisa}
        options={{
          title: "",
          header: () => {
            return <HeaderTab />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Inicial;
