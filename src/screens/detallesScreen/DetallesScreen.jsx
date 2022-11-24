import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

const DetallesScreen = () => {
  const height = useWindowDimensions().height;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { params } = useRoute();

  return (
    <View
      style={{
        top: insets.top,
        flex: 1,
        justifyContent: "space-around",
        padding: 25,
      }}
    >
      <Text style={styles.title}>{params.productName}</Text>
      <View style={{ ...styles.priceContainer, height: height * 0.7 }}>
        <Image source={{ uri: params.image }} style={styles.image} />
        <Text style={{ ...styles.title, marginTop: 10 }}>Ganaste</Text>
        <Text style={styles.title}>{params.price} Puntos</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text>Regresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetallesScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  priceContainer: {
    backgroundColor: "#81a1f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#81a1f0",
    borderRadius: 10,
    width: 150,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
