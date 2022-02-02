import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../Authentication/Authentication";
import Home from "../component/Home";
import { AppNavigator } from "./AppNavigator";

export const Navigation = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <Home /> : <AppNavigator />}
    </NavigationContainer>
  );
};
