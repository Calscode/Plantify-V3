import { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function PlantOnloadScreen() {
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get("https://plantify-backend-n824.onrender.com/api/plants")
      .then((res) => {
        const plantList = res.data.plants;
        const randomPlant = plantList[Math.floor(Math.random() * plantList.length)];
        setPlant(randomPlant);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch plants:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text>🌹🌻🪴 Blooming ... 🐝</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: 'red', fontSize: 12 }}>
          🥀 Failed to load Plant.
        </Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("PlantDetail", { plant })}
    >
      <ImageBackground
        source={{ uri: plant.img_url }}
        style={styles.image}
        imageStyle={{ borderRadius: 16 }}
      >
        {/* <View style={styles.topLeftBadge}>
          
          <Text style={styles.badgeText}>Click  </Text>
        </View> */}

        <View style={styles.overlay}>
          <Text style={styles.name}>{plant.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  centered: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  card: {
    width: 180,
    height: 240,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 3,
    
  },
  image: {
    flex: 1,
    justifyContent: "space-between", 
    position:"relative"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingVertical: 8,
    alignItems: "center",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    position:"absolute",
    bottom: 0,
    left:0,
    right:0
    
  },

  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  topLeftBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#ffffffcc",
    margin: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    position: "absolute",
left :"15%",

    width: 113,
  },

  badgeText: {
  
    fontSize: 12,
    fontWeight: "bold",
    color: "#2e7d32",
  },
});

export default PlantOnloadScreen;
