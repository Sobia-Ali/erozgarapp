import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";

function CustomCamera({ onClosePressed, onPictureTaken }) {
  const [cameraType, setCameraType] = useState(CameraType.front);
  // this is needed if user has not given camera permission
  const [permission, requestPermission] = Camera.useCameraPermissions();
  requestPermission();

  const cameraRef = useRef();

  const onTakePicturePress = async () => {
    if (cameraRef.current && cameraRef.current.takePictureAsync) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();

        if (Platform.OS === "ios") {
          // On iOS, use saveToLibrary option to save the picture to the camera roll
          await MediaLibrary.saveToLibraryAsync(uri);
        } else {
          // On Android, use the MediaLibrary to save the picture
          await MediaLibrary.createAssetAsync(uri);
        }

        console.log("Picture saved successfully!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onCameraFlipPressed = () => {
    if (cameraType === CameraType.front) {
      setCameraType(CameraType.back);
    } else {
      setCameraType(CameraType.front);
    }
  };

  return (
    <View style={styles.mainCon}>
      <Camera style={styles.camera} ref={cameraRef} type={cameraType}>
        <View style={styles.headerIcon}>
          <TouchableOpacity onPress={onClosePressed}>
            <Ionicons name={"close"} color={"white"} size={50} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onCameraFlipPressed}>
            <Ionicons name={"refresh"} color={"white"} size={50} />
          </TouchableOpacity>
        </View>
        <View style={styles.cameraCon}>
          <TouchableOpacity onPress={onTakePicturePress}>
            <Ionicons name={"camera"} color={"white"} size={50} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  cameraCon: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerIcon: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export { CustomCamera };
