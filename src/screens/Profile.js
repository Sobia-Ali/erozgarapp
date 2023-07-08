import React from "react";

import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { ChooseMedia } from "../screens/choosemedia";
import { CustomCamera } from "../screens/customcamre";
const profilePlaceholder = require("../../assets/shampo.jpg");
const Profilescreen = () => {
  const [showCamera, setShowCamera] = useState(false);
  // const [pictureUri, setPictureUri] = useState("");
  // use this to open and close the media picker sheet
  const [showMedia, setShowMedia] = useState(false);
  const [pictureUri, setPictureUri] = useState(""); // if exists use this else use placeholder form above
  const onImgPressed = () => {
    if (showMedia === true) {
      setShowMedia(false);
    } else {
      setShowMedia(true);
    }
  };
  const handlePictureSource = (source) => {
    setPictureUri(source);
    onImgPressed(); // this will close the bottom sheet after adding the picture
  };

  const onCameraBtnPress = () => {
    if (showCamera === true) {
      setShowCamera(false);
    } else if (showCamera === false) {
      setShowCamera(true);
    }
  };
  const closeModel = () => {
    setShowCamera(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.imgBtn} onPress={onImgPressed}>
        <Image
          source={pictureUri === "" ? profilePlaceholder : { uri: pictureUri }}
          style={styles.img}
        />
      </TouchableOpacity>
      <Text>profile</Text>
      {/* {showCamera && <ChooseMedia show={true} onClose={closeModel} />} */}
      <ChooseMedia
        show={true}
        onClosePressed={onImgPressed}
        onPictureTaken={handlePictureSource}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cameraCon: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  img: {
    height: 200,
    width: 200,
    height: 150,
    width: 150,
    borderRadius: 75,
    resizeMode: "contain",
  },
  imgBtn: {
    alignSelf: "center",
  },
});

export { Profilescreen };
