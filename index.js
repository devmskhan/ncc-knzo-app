import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SwiperScreen } from "./src/swiperComponent/swiperScreen/swiperScreen";

export const Index = () => {
  return (
    <SafeAreaView style={styles.cont}>
      <StatusBar style="auto" />
      <View style={styles.cont1}>
        <View>
          <Image style={styles.img} source={require("./img/images.jpeg")} />
        </View>
        <Text style={styles.txt}>welcome!</Text>
      </View>
      <View style={styles.swiper}>
        <SwiperScreen />
        <TouchableOpacity style={styles.submit}>
          <Text style={{ color: "rgba(27,61,129,1)" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  cont1: {
    flex: 2,
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
  swiper: {
    flex: 3,
    backgroundColor: "rgba(27,61,129,1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  submit: {
    width: 200,
    height: 50,
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
