import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import InitialalScreen from "../component/InitialalScreen";
import { LoginScreen } from "../component/LoginScreen";
import { RegisterScreen } from "../component/RegisterScreen";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Account" component={InitialalScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
