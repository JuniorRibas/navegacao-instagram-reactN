import React from "react";

import { Text } from "react-native";
import { Foundation, Ionicons, Feather } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useBottomTab } from "../../Hooks/BarBottomTab";

const Tab = createBottomTabNavigator();

import HomeStack from "../Home";
import PesquisaStack from "../Pesquisa";
import RealsStack from "../Reals";
import LojaStack from "../Loja";
import PerfilStack from "../Perfil";

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
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => {
              return (
                <Foundation name="home" size={focused ? 40 : 30}></Foundation>
              );
            },
          }}
        />
        <Tab.Screen
          name="PesquisaStack"
          component={PesquisaStack}
          options={{
            tabBarVisible: showBottomTab,
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons name="search" size={focused ? 40 : 30}></Ionicons>
              );
            },
          }}
        />
        <Tab.Screen
          name="RealsStack"
          component={RealsStack}
          options={{
            tabBarVisible: showBottomTab,
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => {
              return (
                <Foundation
                  name="play-video"
                  size={focused ? 40 : 30}
                ></Foundation>
              );
            },
          }}
        />
        <Tab.Screen
          name="LojaStack"
          component={LojaStack}
          options={{
            tabBarVisible: showBottomTab,
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => {
              return (
                <Feather name="shopping-bag" size={focused ? 40 : 30}></Feather>
              );
            },
          }}
        />
        <Tab.Screen
          name="PerfilStack"
          component={PerfilStack}
          options={{
            tabBarVisible: showBottomTab,
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => {
              return <Feather name="user" size={focused ? 40 : 30}></Feather>;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Inicial;
