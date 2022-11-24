import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MovimientoComponent = ({ productName, price, image, redemption }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, styles.row]}
      onPress={() =>
        navigation.navigate("Detalles", {
          productName: productName,
          price: price,
          image: image,
        })
      }
    >
      <View style={styles.row}>
        <View style={styles.circle}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <Text style={styles.movimientoTitle}>{productName}</Text>
      </View>

      <View style={[styles.priceContainer, styles.row]}>
        <Text style={styles.priceText}>
          {redemption ? "-" : "+"} ${price}
        </Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default MovimientoComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bfc1c7",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  movimientoTitle: {
    fontSize: 16,
    marginLeft: 10,
  },
  priceContainer: {
    alignItems: "center",
  },
  priceText: {
    fontSize: 16,
    marginRight: 10,
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
});
