import React from "react";
import { View, Text } from "react-native";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";
import { auth } from "../services/db";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    // Perform login logic here
    console.log("Login button pressed");
    console.log("Email:", email);
    console.log("Password:", password);
    // call the firebase service and use it!
    createUserWithEmailAndPassword(auth, email, password)
      .then((respsonse) => {
        console.log(respsonse);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const gotoSignup = () => {
    navigation.navigate("signupScreen");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/furniture-logo-design-vector.jpg")}
        />
        {/* <StatusBar style="auto" /> */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.heading}>
            Don't have an account{" "}
            <Text style={styles.nestedText} onPress={gotoSignup}>
              Sign Up!
            </Text>
          </Text>
        </View>
      </View>
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
    marginBottom: 40,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  forgot_button: {
    height: 50,
    marginTop: -20,
    marginBottom: -20,
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
  heading: {
    marginTop: 10,
    //   fontSize: 24,
    //fontWeight: "bold",
  },
  nestedText: {
    color: "#99621e",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default LoginScreen;
