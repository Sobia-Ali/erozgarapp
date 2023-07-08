import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../services/db";
import { addDoc, collection } from "firebase/firestore";
const signupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const handleSignup = () => {
    // Perform login logic here

    console.log("Signup form submitted");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Age:", age);
    console.log("Gender:", gender);

    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const { uid } = response.user; // Move this line inside the 'then' block
        addDoc(collection(firestore, "users"), {
          uid,
          firstName,
          lastName,
          age,
          email,
          gender,
        });
      })
      .then((docResponse) => {
        console.log(docResponse);
        alert("User is registered");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../assets/furniture-logo-design-vector.jpg")}
          />

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="First Name."
              placeholderTextColor="#003f5c"
              onChangeText={setFirstName}
              //   onChangeText={(text) => setFirstName(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Last Name."
              placeholderTextColor="#003f5c"
              onChangeText={setLastName}

              //   onChangeText={(text) => setLastName(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
              onChangeText={setEmail}
              keyboardType="email-address"
              // onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              onChangeText={setPassword}
              secureTextEntry

              //  onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm Password."
              placeholderTextColor="#003f5c"
              onChangeText={setConfirmPassword}
              secureTextEntry
              // onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Age."
              placeholderTextColor="#003f5c"
              onChangeText={setAge}
              keyboardType="numeric"

              //onChangeText={(text) => setAge(text)}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={handleSignup}>
            <Text style={styles.loginText}>SignUp </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 10,
    backgroundColor: "red",
    // marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#d3d3d3",
    borderRadius: 30,
    // marginTop: 20,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    //  marginTop: 40,
    margin: 10,
    color: "white",
    backgroundColor: "#99621e",
  },
  nestedText: {
    color: "#99621e",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export { signupScreen };
