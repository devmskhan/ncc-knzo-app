import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { RadioButton } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";
import { AuthContext } from "../Authentication/Authentication";
import {
  getFirestore,
  setDoc,
  doc,
  serverTimestamp,
  where,
  addDoc,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase";

const Home = () => {
  // const { user } = useContext(AuthContext);
  const [checked, setChecked] = useState("");
  const data1 = ["Habib", "Bhajaat", "Proton", "sadiq"];
  const [typeComplain, setTypeComplain] = useState("");
  const [modeComplain, setModeComplain] = useState("");
  const [fname, setFName] = useState("");
  const [pnum, setpNum] = useState("");
  const [details, setDetails] = useState("");
  const [service, setService] = useState("");

  const updateUserProfile = () => {
    addDoc(collection(db, "users"), {
      check: checked,
      typeComplain: typeComplain,
      modeComplain: modeComplain,
      details: details,
      service: service,
      fullname: fname,
      number: pnum,
      timeStamp: serverTimestamp(),
    })
      .then(() => {
        alert("Thanks for your feedback, we will get back to you soon");
        setTypeComplain("");
        setModeComplain("");
        setDetails("");
        setFName("");
        setpNum("");
      })
      .catch((err) => alert(err));
  };
  return (
    <ScrollView style={{ backgroundColor: "rgba(27,61,129,1)" }}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.container}>
        <View style={styles.slide1}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.layText1}>
              Have you laid your complaint to any network provider
            </Text>
            <View style={styles.ynText}>
              <View style={styles.ynText}>
                <RadioButton
                  value="first"
                  status={checked === "yes" ? "checked" : "unchecked"}
                  onPress={() => setChecked("yes")}
                  color="white"
                  uncheckedColor="white"
                />
                <Text style={styles.serviceTxt}>Yes</Text>
              </View>
              <View style={styles.ynText}>
                <RadioButton
                  value="first"
                  status={checked === "no" ? "checked" : "unchecked"}
                  onPress={() => setChecked("no")}
                  color="white"
                  uncheckedColor="white"
                />
                <Text style={styles.serviceTxt}>No</Text>
              </View>
            </View>
          </View>
          <>
            <Text style={styles.layText}>select a service provider</Text>
            <View style={styles.serviceView}>
              <TouchableOpacity
                style={styles.btnService}
                onPress={() => setService("Mtn")}
              >
                <Image
                  style={styles.img}
                  source={require("../../img/mtn.jpeg")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnService}
                onPress={() => setService("Airtel")}
              >
                <Image
                  style={styles.img}
                  source={require("../../img/airtel.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnService}
                onPress={() => setService("Glo")}
              >
                <Image
                  style={styles.img}
                  source={require("../../img/glo.jpg")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnService}
                onPress={() => setService("9mobile")}
              >
                <Image
                  style={styles.img}
                  source={require("../../img/9mobile.png")}
                />
              </TouchableOpacity>
            </View>
          </>
        </View>
        {/* <SwiperOne /> */}

        {/* <SwiperTwo /> */}
        <View style={styles.slide1}>
          <View>
            <View style={{ marginBottom: 20 }}>
              <TextInput
                placeholder="Enter your full name"
                style={styles.input}
                keyboardType="name-phone-pad"
                autoFocus={false}
                placeholderTextColor="black"
                onChangeText={(e) => setFName(e)}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <TextInput
                placeholder="Enter your phone number"
                style={styles.input}
                keyboardType="numeric"
                autoFocus={false}
                placeholderTextColor="black"
                onChangeText={(e) => setpNum(e)}
              />
            </View>
            <View style={styles.dropdown}>
              <Text style={styles.layText}>types of complaints</Text>
              <SelectDropdown
                data={data1}
                onSelect={(selectedItem, index) => {
                  setTypeComplain(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                defaultButtonText={"Select complaint"}
              />
            </View>
            <View style={[styles.dropdown, { marginBottom: 20 }]}>
              <Text style={styles.layText}>mode of complaints</Text>
              <SelectDropdown
                data={[1, 2, 3]}
                onSelect={(selectedItem, index) => {
                  setModeComplain(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                defaultButtonText={"Select complaint"}
              />
            </View>
          </View>
        </View>
        {/* <SwiperTwo /> */}

        {/* <SwiperThree /> */}
        <View style={styles.slide1}>
          <View>
            <Text style={styles.layText}>Details of Complains</Text>
            <TextInput
              placeholder="Details of Complain"
              style={styles.input}
              keyboardType="name-phone-pad"
              autoFocus={false}
              placeholderTextColor="black"
              onChangeText={(d) => setDetails(d)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.authButton1}
          onPress={updateUserProfile}
        >
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 20,
  },
  swiper: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 35,
    height: 35,
  },
  serviceView: {
    flexDirection: "row",
  },
  btnService: {
    paddingRight: 10,
  },
  layText: {
    fontSize: 15,
    color: "white",
    paddingBottom: 10,
  },
  layText1: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  ynText: {
    flexDirection: "row",
    alignItems: "center",
  },
  serviceTxt: {
    fontSize: 15,
    color: "white",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
    // marginBottom: 20,
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    marginTop: 20,
    height: 70,
    borderWidth: 0.2,
    backgroundColor: "white",
    width: 200,
    padding: 10,
    borderRadius: 5,
  },
  dropdown: {
    alignItems: "center",
    marginTop: 15,
  },
  dropdown1BtnStyle: {
    width: "80%",
    height: 30,
    backgroundColor: "white",
  },
  layText: {
    fontSize: 15,
    color: "white",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    marginTop: 20,
    height: 70,
    borderWidth: 0.2,
    backgroundColor: "white",
    width: 200,
    padding: 10,
    borderRadius: 5,
  },
  layText: {
    fontSize: 15,
    color: "white",
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
  authButton1: {
    color: "blue",
    backgroundColor: "black",
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Home;
