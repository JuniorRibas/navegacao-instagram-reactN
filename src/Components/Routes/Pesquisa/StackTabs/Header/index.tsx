import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
  TextInputProps,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Header = () => {
  const inputRef = React.createRef<TextInput>();
  const navigation = useNavigation();
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <View
      style={{
        height: 40,
        padding: 5,
        marginTop:
          StatusBar.currentHeight /* only for IOS to give StatusBar Space */,
        flexDirection: "row",
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "#CCC",
          width: dimensions.window.width - 45,
          marginLeft: 20,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          padding: 5,
        }}
        onPress={() => console.log()}
      >
        <TextInput
          ref={inputRef}
          style={{
            width: "100%",
            fontSize: 16,
          }}
          placeholder="Pesquisar"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
