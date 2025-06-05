import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, Image } from 'react-native';
import axios from 'axios';

export const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [allPlants, setAllPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    axios
      .get('https://plantify-backend-n824.onrender.com/api/plants')
      .then((response) => {
        console.log('API raw response:', response.data); // Debug

        let plants = [];

        // Defensive handling of multiple possible response shapes
        if (Array.isArray(response.data)) {
          plants = response.data;
        } else if (Array.isArray(response.data.plants)) {
          plants = response.data.plants;
        } else {
          console.warn('Unexpected API response shape:', response.data);
        }

        setAllPlants(plants);
        setFilteredPlants(plants);
      })
      .catch((error) => {
        console.error('Error fetching plants:', error);
        setAllPlants([]);
        setFilteredPlants([]);
      });
  }, []);

  const handleSearch = (text) => {
    setQuery(text);

    if (!Array.isArray(allPlants)) {
      console.warn('allPlants is not an array:', allPlants);
      setFilteredPlants([]);
      return;
    }

    const filtered = allPlants.filter((plant) =>
      plant?.name?.toLowerCase?.().includes(text.toLowerCase())
    );

    setFilteredPlants(filtered);
  };

  return (
    <View className="flex-1 bg-white p-4">
      <TextInput
        placeholder="Search for a plant..."
        className="mb-4 rounded border border-gray-300 px-3 py-2"
        value={query}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredPlants}
        keyExtractor={(item, index) => item.id?.toString() ?? index.toString()}
        renderItem={({ item }) => (
          <View className="flex-row items-center space-x-3 border-b border-gray-200 p-2">
            {item.img_url && (
              <Image
                source={{ uri: item.img_url }}
                style={{ width: 50, height: 50, borderRadius: 8 }}
              />
            )}
            <Text className="text-lg">{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
