import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function officeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      {/* <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Card title="Card 1">
            <Icon name="heart-outlined" />
            <Image
              source={require("../../assets/imagess.jpeg")}
              style={{
                width: 125,
                height: 80,
                //   marginTop: 10,
                // paddingHorizontal: 25,
                // padding: 10,
              }}
            />
            <Text>Card 1 content</Text>
            <TouchableOpacity style={styles.checkoutBtn}>
              <Text>Add to Cart</Text>
            </TouchableOpacity>
          </Card>
          <Card title="Card 2">
            <Image
              source={require("../../assets/downloader.jpeg")}
              style={{
                width: 125,
                height: 80,
              }}
            />
            <Text>Card 2 content</Text>
          </Card>
        </View>
      </View> */}
      <View style={styles.containertwo}>
        <View style={styles.square}>
          <Image
            source={require("../../assets/downloader.jpeg")}
            style={{
              width: 160,
              height: 140,
              margin: 10,
            }}
          />

          <Text style={styles.name}> comfortable sofa</Text>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.square}>
          <Image
            source={require("../../assets/downloader.jpeg")}
            style={{
              width: 160,
              height: 140,
              margin: 10,
            }}
          />

          <Text style={styles.name}> comfortable sofa</Text>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.containertwo}>
        <View style={styles.square}></View>
        <View style={styles.square} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
  },
  name: {
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 6,
  },
  containertwo: {
    //    backgroundColor: "#00FF00",
    // flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  square: {
    backgroundColor: "lightgray",
    width: 180,
    height: 220,
    borderRadius: 10,
    margin: 5,
  },
  checkoutBtn: {
    width: "72%",
    borderRadius: 25,
    height: 30,
    borderWidth: 1,
    borderColor: "#99621e",
    alignItems: "center",
    justifyContent: "center",
    //  margin: 10,
    marginLeft: 23,
  },
});
