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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const { Register } = useContext(AuthContext);

  return (
    <View style={styles.accountBackground}>
      <StatusBar style="auto" />
      <View>
        <Image style={styles.img} source={require("../../img/images.jpeg")} />
      </View>
      <Text style={styles.txt}>welcome!</Text>
      <View style={styles.accountCover} />
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
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(u) => setPassword(u)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            placeholder="Confirm Password"
            value={cpassword}
            secureTextEntry
            textContentType="password"
            autoCapitalize="none"
            onChangeText={(u) => setCPassword(u)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={styles.authButton1}
            onPress={() => Register(email, password, cpassword)}
          >
            <Text style={{ color: "white" }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.dontHAcc}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: "rgba(27,61,129,1)" }}>
          Already have an account
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
    color: "rgba(0,0,0,0.6)",
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
