import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  index,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "react-native-elements";

export default function Home({ navigation }) {
  const [inputValue, setInputValue] = useState();
  const [selectCategoryIndex, setSelectCategoryIndex] = React.useState(0);
  const CategoryItem = [
    { name: "Office", iconName: "seat-outline" },
    { name: "Cafe", iconName: "table-furniture" },
    { name: "Cupboard", iconName: "cupboard-outline" },
    { name: "Home", iconName: "bed-queen-outline" },
  ];
  const handleCategoryPress = (index) => {
    setSelectCategoryIndex(index);

    // Perform navigation to the related page based on the selected category
    switch (index) {
      case 0:
        // Navigate to the first category's related page
        // Add your navigation logic here
        navigation.navigate("officeScreen");
        break;
      case 1:
        // Navigate to the second category's related page
        navigation.navigate("CafeScreen");
        break;
      // Add more cases for each category
      default:
        navigation.navigate("Cupboard");
        break;
    }
  };
  const images = [
    {
      id: 1,
      imageSource: require("../../assets/imagess.jpeg"),
      data: "product is not available",
    },
    {
      id: 2,
      imageSource: require("../../assets/slider-home-furniture.jpg"),
      data: "Image 2 Data",
    },
    // {
    //   id: 3,
    //   imageSource: require("../../assets/furniturelogo.jpg"),
    //   data: "Image 3 Data",
    // },
  ];
  const handleImagePress = (image) => {
    navigation.navigate("detail", { image, data: image.data });
  };
  // const onGoPress = () => {
  //   navigation.navigate("profile"); // Corrected to use the screen name as a string
  // };

  const goToProfile = () => {
    navigation.navigate("Profile", {
      myNameIs: "Erozgaar 🐑 ",
      actress: "katrina",
    });
  };
  const goTologin = () => {
    navigation.navigate("LoginScreen");
  };
  const goprofile = () => {
    navigation.navigate("Profilescreen");
  };

  const listCategories = () => {
    return (
      <View style={style.categorycontainer}>
        {CategoryItem.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[style.category]}
            onPress={() => handleCategoryPress(index)}
          >
            <Icon name={item.iconName} size={20} />
            <Text style={style.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.header}>
        <Icon name="sort-variant" size={28} />

        <Button onPress={goprofile} title={"Profile"} />

        <Icon name="cart-outline" size={28} />
        <Icon name="login" onPress={goTologin} title={"Login"} size={28} />
       
      </View>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          {/* <Image
            source={require("../../assets/furniturelogo.jpg")}
            style={{
              width: 50,
              height: 50,
              marginTop: 10,
              paddingHorizontal: 25,
              padding: 10,
            }}
            
          /> */}
          <Text style={style.headerTitle}>Felix furniture</Text>
          <Text>test git account</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={style.searchInput}>
            <Icon name="magnify" size={20} />
            <TextInput placeholder="search" />
          </View>
          <View style={style.sortBtn}>
            <Icon name="tune" size={30} style={{ marginTop: 5 }} />
          </View>
        </View>
        <Text style={style.title}>Catalog</Text>
        {listCategories()}
        <Text style={style.subtitle}>Top Furniture</Text>
        {/* <Button onPress={goToProfile} title={"GO"} /> */}
        <View style={{ flexDirection: "row", paddingHorizontal: 15 }}>
          <FlatList
            data={images}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleImagePress(item)}>
                <View style={{ padding: 10 }}>
                  <Image
                    source={item.imageSource}
                    style={{ width: 340, height: 120 }}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <Text style={style.subtitle}>New Arrival</Text>
        <View style={style.container}>
          <View style={style.cardContainer}>
            <Image
              source={require("../../assets/images2.jpeg")}
              style={{
                width: 160,
                height: 120,
                margin: 10,
                //   marginTop: 10,
                // paddingHorizontal: 25,
                // padding: 10,
              }}
            />

            <Image
              source={require("../../assets/images3.jpeg")}
              style={{
                width: 160,
                height: 120,
                margin: 10,
                // marginTop: 10,
                //  paddingHorizontal: 25,
                // padding: 10,
              }}
            />

            {/* <Card title="Card 3">
              <Text>Card 3 content</Text>
            </Card> */}
          </View>
        </View>
        <View>
          <TextInput value={inputValue} onChangeText={setInputValue} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
  },
  categoryName: {
    fontSize: 13,
    fontWeight: "bold",
  },
  category: {
    flexDirection: "row",
    padding: 8,
    marginTop: 10,
    borderRadius: 7,
    backgroundColor: "lightgray",
  },
  categorycontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "lightgray",
  },
  headerTitle: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: "bold",
    width: "60%",
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 40,
    backgroundColor: "lightgray",
    flex: 1,
    borderRadius: 12,
    flexDirection: "row",
    marginLeft: 8,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  sortBtn: {
    backgroundColor: "lightgray",
    height: 40,
    width: 40,
    alignItems: "center",
    marginLeft: 10,
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    paddingHorizontal: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
});
