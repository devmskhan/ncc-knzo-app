import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const InitialalScreen = ({ navigation }) => {
  return (
    <View style={styles.accountBackground}>
      <StatusBar style="auto" />
      <View>
        <Image style={styles.img} source={require("../../img/images.jpeg")} />
      </View>
      <Text style={styles.txt}>welcome!</Text>
      <TouchableOpacity
        style={styles.authButton1}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: "white" }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  accountBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  authButton1: {
    color: "blue",
    backgroundColor: "rgba(27,61,129,1)",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
  },
  accountContainer: {
    backgroundColor: "rgb(255, 255, 255)",
    padding: 32,
    marginTop: 32,
  },
  authInput: {
    width: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  dontHAcc: {
    marginTop: 12,
    width: 265,
    height: 50,
    backgroundColor: "rgba(27,61,129,1)",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 160,
    height: 105,
  },
  txt: {
    fontSize: 50,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "rgba(27,61,129,1)",
  },
});

export default InitialalScreen;
