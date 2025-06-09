import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

function PlantDetailScreen({ route }) {
    console.log("🚨 PlantDetailScreen route.params:", route.params);
  const plant = route.params?.plant?.plant;
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: plant.img_url }} style={styles.image} />
        <TouchableOpacity style={styles.heart} onPress={toggleLike}>
          <AntDesign
            name={liked ? "heart" : "hearto"}
            size={28}
            color={liked ? "red" : "gray"}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{plant.name}</Text>
      <Text style={styles.scientific}>{plant.scientific_name}</Text>
      
      <Text style={styles.section}>Description</Text>
      <Text>{plant.description}</Text>

      <Text style={styles.section}>Light Requirements</Text>
      <Text>{plant.light_requirements}</Text>

      <Text style={styles.section}>Watering Frequency</Text>
      <Text>{plant.watering_frequency}</Text>

      <Text style={styles.section}>Soil Type</Text>
      <Text>{plant.soil_type}</Text>

      <Text style={styles.section}>Bloom Season</Text>
      <Text>{plant.bloom_season}</Text>

      <Text style={styles.section}>Mature Height</Text>
      <Text>{plant.mature_height}</Text>

      <Text style={styles.section}>Growth Rate</Text>
      <Text>{plant.growth_rate}</Text>

      <Text style={styles.section}>Difficulty</Text>
      <Text>{plant.difficulty}</Text>

      <Text style={styles.section}>Ideal Temperature</Text>
      <Text>{plant.ideal_temperature}</Text>

      <Text style={styles.section}>Toxicity</Text>
      <Text>{plant.toxicity}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  heart: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 6,
    elevation: 4,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
  },
  scientific: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#777",
    marginBottom: 16,
  },
  section: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
  },
});

export default PlantDetailScreen;
