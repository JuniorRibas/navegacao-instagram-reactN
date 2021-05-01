import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//Telas
import Home from "../../Pages/Home/Principal";

//Componentes
import HeaderHomeRight from "./../../Components/Routes/Home/StackHome/HeaderRight";
import HeaderHomeLeft from "./../../Components/Routes/Home/StackHome/HeaderLeft";
import HeaderChatRight from "./../../Components/Routes/Home/StackChat/HeaderRight";
import Fotos from "../../Pages/Home/Fotos";
import Likes from "../../Pages/Home/Likes";
import ListChat from "../../Pages/Home/ListChat";
import NewChat from "./../../Pages/Home/NewChat";

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
      <Stack.Screen name="Home/Likes" component={Likes} />
      <Stack.Screen
        name="Home/Chat"
        component={ListChat}
        options={{
          headerRight: () => {
            return <HeaderChatRight />;
          },
        }}
      />
      <Stack.Screen name="Home/NewChat" component={NewChat} />
    </Stack.Navigator>
  );
};

export default Inicial;
