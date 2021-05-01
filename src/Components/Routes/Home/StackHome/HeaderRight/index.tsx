import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: 150,
        marginRight: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home/Fotos")}>
        <Entypo name="squared-plus" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home/Likes")}>
        <Entypo name="heart" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home/Chat")}>
        <Ionicons name="ios-chatbubbles" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
