import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

import Principais from "./../../../Pages/Pesquisa/Principais";
import Contas from "./../../../Pages/Pesquisa/Contas";
import Tags from "./../../../Pages/Pesquisa/Tags";
import Locais from "./../../../Pages/Pesquisa/Locais";

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pesquisa/Principais"
        component={Principais}
        options={{
          title: "Principais",
        }}
      />
      <Tab.Screen
        name="Pesquisa/Contas"
        component={Contas}
        options={{
          title: "Contas",
        }}
      />
      <Tab.Screen
        name="Pesquisa/Tags"
        component={Tags}
        options={{
          title: "Tags",
        }}
      />
      <Tab.Screen
        name="Pesquisa/Locais"
        component={Locais}
        options={{
          title: "Locais",
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
