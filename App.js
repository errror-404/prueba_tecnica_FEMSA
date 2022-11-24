import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import "react-native-gesture-handler";
import MainNav from "./navigation/MainNav";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainNav />
    </NavigationContainer>
  );
}
