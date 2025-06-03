import { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import PlantCard from "./PlantCard";


function DiscoveryScreen() {

     const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Aloe_vera_flower_inset.jpg/320px-Aloe_vera_flower_inset.jpg",
      wateringFrequency: 3,
    },
    {
      id: 2,
      name: "Basil",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ocimum_basilicum0.jpg/320px-Ocimum_basilicum0.jpg",
      wateringFrequency: 2,
    },
  ];

        // const [plants, setPlants] = useState([]);
        const [loading, setLoading] = useState(true);
        const [isError, setIsError] = useState(false);

        useEffect(() => {
            axios.get("")
            .then(res => {
                // setPlants(res.data)
                setLoading(false);
            }) 
            .catch(err => {
                console.log(err);
                setLoading(false)
                setIsError(true);
            })
        }, []);

        if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading plants...⌛🤞</Text>
      </View>
    );
  }
    return (
        <View style={styles.container}>
      <FlatList
        data={plants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PlantCard plant={item} />}
      />
    </View>

    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DiscoveryScreen