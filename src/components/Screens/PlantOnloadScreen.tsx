import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function PlantOnloadScreen() {
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
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
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text>Loading...🪴</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      className="flex-1 justify-center items-center bg-white"
      onPress={() => navigation.navigate("PlantDetail", { plant })}
    >
      <Image
        source={{ uri: plant.img_url }}
        className="w-full h-96"
        resizeMode="cover"
      />
      <Text className="text-xl font-bold mt-4">{plant.name}</Text>
      <Text className="text-gray-500">Tap to see more</Text>
    </TouchableOpacity>
  );
}

export default PlantOnloadScreen;
