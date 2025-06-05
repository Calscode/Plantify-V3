import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import PlantCard from './PlantCard';

export default function DiscoveryScreen({ navigation }) {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    axios.get("https://plantify-backend-n824.onrender.com/api/plants")
      .then((response) => {
        console.log("Fetched data:", response.data);
        setPlantData(response.data.plants);
      })
      .catch((error) => {
        console.error("Error fetching plant data:", error);
      });
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {plantData.length === 0 ? (
        <Text>Loading or no plants found...</Text>
      ) : (
        <FlatList
          data={plantData}
          keyExtractor={(item) => item.plant_id.toString()}
          renderItem={({ item }) => (
            <PlantCard plant={item} />
          )}
        />
      )}
    </View>
  );
}