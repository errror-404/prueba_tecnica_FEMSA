import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MovimientoComponent from "../../components/MovimientoComponent";
import axios from "axios";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const fetchData = async () => {
    await axios
      .get("https://6222994f666291106a29f999.mockapi.io/api/v1/products")
      .then((res) => setData(res.data));

    setFilterData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      data={filterData}
      renderItem={({ item }) => (
        <MovimientoComponent
          key={item.id}
          productName={item.product}
          price={item.price}
          redemption={item.is_redemption}
          image={item.image}
        />
      )}
      ListHeaderComponent={() => <Header />}
      keyExtractor={(item) => item.id}
      ListFooterComponent={() => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setFilterData(
                filterData.filter((item) => item.is_redemption === false)
              );
            }}
          >
            <Text>Ganancia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setFilterData(data);
            }}
          >
            <Text>Reload</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setFilterData(
                filterData.filter((item) => item.is_redemption === true)
              );
            }}
          >
            <Text>Perdidas</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#81a1f0",
    padding: 10,
    borderRadius: 10,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});

export default HomeScreen;
