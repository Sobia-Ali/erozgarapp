import {
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControlBase,
} from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default function checkout({ route }) {
  const data = route.params;
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const incrementCount = () => {
    setCount(count + 1);
  };
  // Function to decrement the count
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Billing Details</Text>

      <Text>Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Please enter full name"
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter Email"
        onChangeText={(text) => setPassword(text)}
      />
      <Text> Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter Your Address"
        onChangeText={(text) => setPassword(text)}
      />
      <Text> Town/City</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter Your town/city"
        onChangeText={(text) => setPassword(text)}
      />
      <Text> Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter Your phone number"
        onChangeText={(text) => setPassword(text)}
      />

      <View style={styles.innercontainer}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.carttext}>Your Order</Text>
        </View>
        <View
          style={{
            //  flex: 1,
            flexDirection: "row",
            // backgroundColor: "lightgray",
            //  width: 370,
            margin: 10,
          }}
        >
          {/* <Text>Cart data</Text> */}
          <Image
            style={styles.image}
            source={require("../../assets/furniture-logo-design-vector.jpg")}
          />

          <View
            style={{
              //  margin: 10,
              marginLeft: 30,
            }}
          >
            <Text style={styles.productname}>product name</Text>
            <Text style={styles.productname}>price:3500</Text>
            <Text style={styles.productprice}>Quantity:2</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={styles.price}>Subtotal:</Text>
          <Text style={styles.charges}>1200</Text>
        </View>
        <View style={styles.line} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={styles.price}>Shipping:</Text>
          <Text style={styles.charges}>500</Text>
        </View>
        <View style={styles.line} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={styles.price}>Total:</Text>
          <Text style={styles.charges}>1800</Text>
        </View>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.ordertext}>Place your order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    padding: 20,
  },
  line: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    width: "70%",
    marginLeft: 45,
  },
  price: {
    marginLeft: 40,
  },
  ordertext: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "arial",
  },
  checkoutBtn: {
    width: "68%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginLeft: 50,
    color: "white",
    marginBottom: 10,
    backgroundColor: "#99621e",
  },
  charges: {
    marginRight: 70,
  },
  image: {
    height: 90,
    width: 90,
    //    marginTop: 10,
    marginLeft: 30,
  },
  productname: {
    fontFamily: "sans-serif",
    fontSize: 16,
    fontWeight: 500,
    //  margin: 2,
    // margin: 20,
  },
  innercontainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
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
