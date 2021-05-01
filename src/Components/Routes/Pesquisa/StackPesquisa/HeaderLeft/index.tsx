import React, { useState } from "react";
import {
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Header = () => {
  const navigation = useNavigation();
  const [dimensions, setDimensions] = useState({ window, screen });
  return (
    <View
      style={{
        height: 40,
        padding: 5,
        marginTop:
          StatusBar.currentHeight /* only for IOS to give StatusBar Space */,
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "#CCC",
          width: dimensions.window.width - 40,
          marginLeft: 20,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          padding: 5,
        }}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Ionicons
          name="search"
          size={20}
          style={{ paddingRight: 10 }}
        ></Ionicons>
        <Text
          style={{
            width: "100%",
            fontSize: 16,
          }}
        >
          Pesquisar
        </Text>
      </TouchableOpacity>
    </View>
    // <View
    //   style={{
    //     flex: 1,
    //     marginTop: StatusBar.currentHeight,
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <TouchableOpacity
    //     style={{
    //       flex: 1,
    //       backgroundColor: "#CCC",
    //       width: dimensions.window.width,
    //       marginLeft: 20,
    //       height: 35,
    //       borderRadius: 10,
    //       flexDirection: "row",
    //       alignItems: "center",
    //       padding: 5,
    //     }}
    //     onPress={() => console.log("Tocou no input")}
    //   >
    //     <Ionicons name="search" size={20}></Ionicons>
    //     <Text
    //       style={{
    //         width: "100%",
    //         marginLeft: 10,
    //         fontSize: 16,
    //       }}
    //     >
    //       Pesquisar
    //     </Text>
    //   </TouchableOpacity>
    // </View>
  );
};

export default Header;
