import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import home from "../screens/home";
import React from "react";
import Cart from "../screens/Cart";
import detail from "../screens/detail";
import LoginScreen from "../screens/Login";
import { CustomCamera } from "../screens/customcamre";
import { Profilescreen } from "../screens/Profile";
import MyCarousel from "../screens/carousal";
import { signupScreen } from "../screens/signUp";
import checkout from "../screens/checkout";
import officeScreen from "../screens/Office";
import CafeScreen from "../screens/Cafe";
import Cupboard from "../screens/Cafe";

const Stack = createNativeStackNavigator();
function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"home"} component={home} />
        <Stack.Screen name={"MyCarousel"} component={MyCarousel} />
        <Stack.Screen name={"Cart"} component={Cart} />
        <Stack.Screen name={"officeScreen"} component={officeScreen} />
        <Stack.Screen name={"CafeScreen"} component={CafeScreen} />
        <Stack.Screen name={"Cupboard"} component={Cupboard} />
        <Stack.Screen name={"checkout"} component={checkout} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="detail" component={detail} />
        <Stack.Screen name="signupScreen" component={signupScreen} />
        <Stack.Screen name="CustomCamera" component={CustomCamera} />
        <Stack.Screen name="Profilescreen" component={Profilescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export { MainNavigation };
