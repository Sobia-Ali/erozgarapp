import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default function Cart({ route }) {
  const data = route.params;
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const [usersData, setUsersData] = useState();
  const getDataFromApi = () => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        if (response.data) {
          setUsersData(response.data);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  getDataFromApi();
  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };
  // Function to decrement the count
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View
      style={{
        //flex: 1,
        flexDirection: "column",
        //    alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <View
        style={{
          //  flex: 1,
          flexDirection: "row",
          backgroundColor: "lightgray",
          width: 370,
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
            margin: 10,
          }}
        >
          <Text style={styles.productname}>product name</Text>
          <Text style={styles.productname}>price:</Text>
          <Text style={styles.productprice}>$300</Text>
          <Text>checkgit</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 70,
            marginLeft: -35,
          }}
        >
          <Icon
            name="plus"
            size={30}
            style={{
              backgroundColor: "#99621e",
              height: 30,
              margin: 5,
              borderRadius: 8,
            }}
            onPress={incrementCount}
          />
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#edede9",
              width: 30,
              height: 30,
              margin: 5,
              borderRadius: 8,
              textAlign: "center",
              //  padding: 6,

              fontSize: 20,
            }}
          >
            {count}
          </Text>

          <Icon
            name="minus"
            size={30}
            onPress={decrementCount}
            style={{
              backgroundColor: "#99621e",
              height: 30,
              margin: 5,
              borderRadius: 8,
            }}
          />
        </View>
      </View>

      <View
        style={{
          //  flex: 1,
          flexDirection: "row",
          backgroundColor: "lightgray",
          width: 370,
          margin: 10,
        }}
      >
        {/* <Text>Cart data</Text> */}
        <Image
          style={styles.image}
          source={require("../../assets/images4.jpeg")}
        />

        <View
          style={{
            margin: 10,
          }}
        >
          <Text style={styles.productname}>product name</Text>
          <Text style={styles.productname}>price:</Text>
          <Text style={styles.productprice}>$300</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 70,
            marginLeft: -35,
          }}
        >
          <Icon
            name="plus"
            size={30}
            style={{
              backgroundColor: "#99621e",
              height: 30,
              margin: 5,
              borderRadius: 8,
            }}
            onPress={incrementCount}
          />
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#edede9",
              width: 30,
              height: 30,
              margin: 5,
              textAlign: "center",
              //  padding: 6,
              borderRadius: 8,
              fontSize: 20,
            }}
          >
            {count}
          </Text>

          <Icon
            name="minus"
            size={30}
            onPress={decrementCount}
            style={{
              backgroundColor: "#99621e",
              height: 30,
              margin: 5,
              borderRadius: 8,
            }}
          />
        </View>
      </View>
      <View
        style={{
          //  flex: 1,
          flexDirection: "row",
          backgroundColor: "lightgray",
          width: 370,
          margin: 10,
        }}
      >
        {/* <Text>Cart data</Text> */}
        <Image
          style={styles.image}
          source={require("../../assets/images3.jpeg")}
        />

        <View
          style={{
            margin: 10,
          }}
        >
          <Text style={styles.productname}>product name</Text>
          <Text style={styles.productname}>price:</Text>
          <Text style={styles.productprice}>$300</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 70,
            marginLeft: -35,
          }}
        >
          <Icon
            name="plus"
            size={30}
            style={{
              backgroundColor: "#99621e",
              height: 30,
              margin: 5,
              borderRadius: 8,
            }}
            onPress={incrementCount}
          />
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#edede9",
              width: 30,
              height: 30,
              margin: 5,
              textAlign: "center",
              //  padding: 6,
              borderRadius: 8,
              fontSize: 20,
            }}
          >
            {count}
          </Text>

          <Icon
            name="minus"
            size={30}
            onPress={decrementCount}
            style={{
              backgroundColor: "#99621e",
              height: 30,
              margin: 5,
              borderRadius: 8,
            }}
          />
        </View>
      </View>

      <View style={{ marginLeft: 10 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.carttext}>Cart Summary</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={styles.price}>price:</Text>
          <Text style={styles.charges}>234</Text>
        </View>
        <View style={styles.line} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={styles.price}>deliverycharges:</Text>
          <Text style={styles.charges}>234</Text>
        </View>
        {/* <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "black",
              height: 2,
              flex: 1,
              width: "20%",
              alignSelf: "center",
            }}
          />
        </View> */}
        <View style={styles.line} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={styles.price}>TotalCharges:</Text>
          <Text style={styles.charges}>4789</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate("checkout", data)}
        >
          <Text style={styles.textBtn}>checkout</Text>
        </TouchableOpacity>
      </View>
      {/* <FlatList
        data={usersData}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.avatar_url }}
              style={{ width: 100, height: 100 }}
            />
            <Text>{item.login}</Text>
          </View>
        )}
        
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 120,
    margin: 15,
    borderRadius: 8,
  },
  price: {
    marginLeft: 40,
  },
  charges: {
    marginRight: 70,
  },
  line: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    width: "70%",
    marginLeft: 45,
  },
  productname: {
    fontFamily: "sans-serif",
    fontSize: 18,
    fontWeight: 500,
  },
  productprice: {
    fontFamily: "sans-serif",
    fontSize: 22,
    fontWeight: 500,
    color: "#99621e",
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  carttext: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "italic",
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
    backgroundColor: "#99621e",
  },
  textBtn: {
    fontSize: 16,
    color: "white",
    fontWeight: 400,
  },
});
