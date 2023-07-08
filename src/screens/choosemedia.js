import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { CustomCamera } from "../screens/customcamre";
import * as ImagePicker from "expo-image-picker";

function ChooseMedia({ show, onClosePressed, onPictureTaken }) {
  const [isModalVisible, setIsModalVisible] = useState(show);
  const [imagetaken, setimagetaken] = useState();
  const [openMediaType, setOpenMediaType] = useState("none");
  // const onCameraPress = () => {
  //   setOpenMediaType("camera");
  // };
  ImagePicker.launchImageLibraryAsync({ quality: 1, allowsEditing: true })
    .then((response) => {
      console.log(response);
      onPictureTaken(response.uri);
    })
    .catch((error) => {
      console.log(error);
    });

  // ImagePicker.requestMediaLibraryPermissionsAsync();

  const onGalleryPress = () => {
    ImagePicker.launchImageLibraryAsync({ quality: 1 })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      {openMediaType === "none" && (
        <Modal isVisible={show} style={{ margin: 0 }}>
          <View style={{ height: "100%", justifyContent: "flex-end" }}>
            <TouchableOpacity
              style={{ alignSelf: "flex-end" }}
              onPress={onClosePressed}
            >
              <Ionicons name={"close-circle"} color={"red"} size={50} />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: "white",
                height: 300,
                width: "100%",
                justifyContent: "center",
              }}
            >
              <View style={styles.chooseCon}>
                <TouchableOpacity
                  style={styles.chooseIconsCon}
                  onPress={onGalleryPress}
                >
                  <Ionicons name={"image"} color={"white"} size={40} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.chooseIconsCon}
                  onPress={onCameraPress}
                >
                  <Ionicons name={"camera"} color={"white"} size={40} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}

      {openMediaType === "camera" && (
        <View style={{ flex: 1 }}>
          <CustomCamera
            onClosePressed={() => {
              setOpenMediaType("none");
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  chooseCon: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  chooseIconsCon: {
    backgroundColor: "orange",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    marginLeft: 10,
    marginBottom: 50,
  },
});

export { ChooseMedia };
