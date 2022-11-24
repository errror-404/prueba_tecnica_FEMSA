import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView>
      <View style={{ ...styles.banner }}>
        <Text style={styles.title}>!Bienvenido!</Text>
        <Text style={styles.name}>Jose Perez Joglar</Text>
        <Text>Cumpleaños: 18 de Octubre</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Tus Movimientos</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#81a1f0",
    padding: 10,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    height: 125,
  },
  container: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontweight: "500",
    marginVertical: 10,
  },
});
