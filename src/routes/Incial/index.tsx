import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useBottomTab } from "./../../Hooks/BarBottomTab";

const Tab = createBottomTabNavigator();

import HomeStack from "./../Home";
import PesquisaStack from "./../Pesquisa";
import RealsStack from "./../Reals";
import LojaStack from "./../Loja";
import PerfilStack from "./../Perfil";

const Inicial = () => {
  const { showBottomTab } = useBottomTab();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarVisible: showBottomTab,
          }}
        />
        <Tab.Screen name="PesquisaStack" component={PesquisaStack} />
        <Tab.Screen name="RealsStack" component={RealsStack} />
        <Tab.Screen name="LojaStack" component={LojaStack} />
        <Tab.Screen name="PerfilStack" component={PerfilStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Inicial;
