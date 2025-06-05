import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';

function PlantCard({ plant }) {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("PlantDetail", { plant })}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: plant.img_url }} style={styles.image} />
        <TouchableOpacity style={styles.heart} onPress={toggleLike}>
          <AntDesign
            name={liked ? "heart" : "hearto"}
            size={24}
            color={liked ? "red" : "gray"}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{plant.name}</Text>
      <Text style={styles.scientific}>{plant.scientific_name}</Text>
      <Text style={styles.text}>☀️ {plant.light_requirements}</Text>
      <Text style={styles.text}>💧 {plant.watering_frequency}</Text>
      <Text style={styles.text}>🎯 {plant.difficulty}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {plant.description}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#f0fdf4",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  heart: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  scientific: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#555",
    marginBottom: 4,
  },
  text: {
    fontSize: 13,
    color: "#444",
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
});

export default PlantCard;