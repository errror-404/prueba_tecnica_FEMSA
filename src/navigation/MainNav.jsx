import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DetallesScreen from "../screens/detallesScreen/DetallesScreen";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const MainNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detalles"
        component={DetallesScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
