import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import PlantCard from './PlantCard';
import { useUser } from '../UserContext';

export default function DiscoveryScreen({ navigation }) {
  const { likedPlantIds, fetchLikedPlants, userId } = useUser();
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    axios
      .get("https://plantify-backend-n824.onrender.com/api/plants")
      .then((response) => {
        setPlantData(response.data.plants);
      })
      .catch((error) => {
        console.error("Error fetching plant data:", error);
      });
  }, []);

  useEffect(() => {
    if (userId) {
      fetchLikedPlants();
    }
  }, [userId]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {plantData.length === 0 ? (
        <Text>Loading or no plants found...</Text>
      ) : (
       <FlatList
  data={plantData}
  keyExtractor={(item) => item.plant_id.toString()}
  renderItem={({ item }) => (
    <View style={{ marginBottom: 16 }}>
      <PlantCard plant={item} navigation={navigation} />
    </View>
  )}
  extraData={likedPlantIds}
/>
      )}
    </View>
  );
}