import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { useState } from "react";
//import Cart from "./Cart";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MyCarousel from "./carousal";
// DetailsScreen component to display selected item details

const detail = ({ route }) => {
  const { image, data } = route.params;

  const [count, setCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorPress = (color) => {
    setSelectedColor(color);
  };

  const navigation = useNavigation();

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };
  // Function to decrement the count

  // Function to decrement the count
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <View
      style={{
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 35,
      }}
    >
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View title="HELLO WORLD">
          <Image
            source={image.imageSource}
            style={{ width: 350, height: 200, marginTop: 15, borderRadius: 15 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Text style={style.productname}>{data}</Text>
            {/* <Text style={style.price}>from prk :300</Text> */}
          </View>

          <Text style={style.description}> Description:</Text>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={style.quantity}>Quantity</Text>
            <Text style={style.remaingQuenty}>remaning</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Icon
              name="plus"
              size={40}
              style={{ backgroundColor: "lightgray", height: 40 }}
              onPress={incrementCount}
            />
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#edede9",
                width: 40,
                textAlign: "center",
                padding: 6,
                fontSize: 25,
              }}
            >
              {count}
            </Text>

            <Icon
              name="minus"
              size={40}
              onPress={decrementCount}
              style={{ backgroundColor: "lightgray", height: 40 }}
            />
            <Text style={{ marginLeft: 100, fontSize: 15, margintop: 10 }}>
              {" "}
              Item:12
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={style.quantity}>ColorsSelection</Text>

            {selectedColor && (
              <Image
                source={require("../../assets/shampo.jpg")}
                style={{ tintColor: selectedColor, height: 40, width: 40 }}
              />
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              //  marginTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => handleColorPress("#780000")}
              style={{
                backgroundColor: "#780000",
                width: 40,
                height: 40,
                borderRadius: 10,
                margin: 10,
              }}
            />
            <TouchableOpacity
              onPress={() => handleColorPress("#e09f3e")}
              style={{
                backgroundColor: "#e09f3e",
                width: 40,
                height: 40,
                borderRadius: 10,
                margin: 10,
              }}
            />
            <TouchableOpacity
              onPress={() => handleColorPress("#432818")}
              style={{
                backgroundColor: "#432818",
                width: 40,
                height: 40,
                borderRadius: 10,
                margin: 10,
              }}
            />
            <TouchableOpacity
              onPress={() => handleColorPress("#5e548e")}
              style={{
                backgroundColor: "#5e548e",
                width: 40,
                height: 40,
                borderRadius: 10,
                margin: 10,
              }}
            />
            <TouchableOpacity
              onPress={() => handleColorPress("#001219")}
              style={{
                backgroundColor: "#001219",
                width: 40,
                height: 40,
                borderRadius: 10,
                margin: 10,
              }}
            />
            <TouchableOpacity
              onPress={() => handleColorPress("#84a59d")}
              style={{
                backgroundColor: "#84a59d",
                width: 40,
                height: 40,
                borderRadius: 10,
                margin: 10,
              }}
            />
          </View>
          <View style={{ flexDirection: "row", padding: 10, marginBottom: 10 }}>
            <TouchableOpacity style={style.loginBtn}>
              <Text style={style.textBtn}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.buyBtn}
              onPress={() => navigation.navigate("Cart", data)}
            >
              <Text style={style.textBtn}>Add to cart</Text>
            </TouchableOpacity>
          </View>
          <MyCarousel />
        </View>
      </View>

      {/* <Image source={image.imageSource} style={{ width: 200, height: 200 }} />
      <Text>{data}</Text> */}
    </View>
  );
};
const style = StyleSheet.create({
  quantity: {
    fontSize: 16,
    // marginTop: 5,
    fontWeight: "bold",
    padding: 5,
    // width: "60%",
    // paddingHorizontal: 20,
  },
  remaingQuenty: {
    marginLeft: 150,
    fontWeight: "bold",
    padding: 5,
    fontSize: 16,
  },
  loginBtn: {
    width: "42%",
    borderRadius: 25,
    height: 40,
    // marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    //  marginTop: 40,
    // margin: 10,
    color: "white",
    backgroundColor: "#99621e",
  },
  buyBtn: {
    width: "42%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    //  marginTop: 40,
    //  margin: 10,
    //  color: "white",
    backgroundColor: "#99621e",
  },
  textBtn: {
    fontSize: 16,
    color: "white",
    fontWeight: 400,
  },
  price: {
    marginLeft: 60,
    fontSize: 16,
    fontWeight: 500,
    marginTop: 10,
  },
  productname: {
    fontSize: 16,
    fontWeight: 500,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: 500,
    marginTop: 10,
    marginBottom: 10,
  },
});
export default detail;
