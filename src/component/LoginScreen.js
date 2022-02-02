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
import { AuthContext } from "../Authentication/Authentication";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Login, signInWithGoogle } = useContext(AuthContext);

  return (
    <View style={styles.accountBackground}>
      <StatusBar style="auto" />
      <View>
        <Image style={styles.img} source={require("../../img/images.jpeg")} />
      </View>
      <Text style={styles.txt}>welcome!</Text>
      <View style={styles.accountContainer}>
        <TextInput
          style={styles.authInput}
          placeholder="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <View style={{ marginTop: 20 }}>
          <TextInput
            placeholder="PassWord"
            value={password}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(u) => setPassword(u)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.dontHAcc}
        onPress={() => Login(email, password)}
      >
        <Text style={{ color: "white" }}>Login </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ color: "rgba(27,61,129,1)" }}>
          Dont have account yet?...
        </Text>
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
