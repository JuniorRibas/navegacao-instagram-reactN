import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 80,
        marginRight: 10,
      }}
    >
      <TouchableOpacity>
        <Feather name="list" size={25} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home/NewChat")}>
        <Feather name="edit" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
