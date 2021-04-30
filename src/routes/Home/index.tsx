import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//Telas
import Home from "../../Pages/Home/Principal";

//Componentes
import HeaderHomeRight from "../../Components/Routes/Home/HeaderRight";
import HeaderHomeLeft from "../../Components/Routes/Home/HeaderLeft";
import Fotos from "../../Pages/Home/Fotos";

const Inicial = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          headerLeft: () => {
            return <HeaderHomeLeft />;
          },
          headerRight: () => {
            return <HeaderHomeRight />;
          },
        }}
      />
      <Stack.Screen name="Home/Fotos" component={Fotos} />
    </Stack.Navigator>
  );
};

export default Inicial;
