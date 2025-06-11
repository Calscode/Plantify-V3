import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [allPlants, setAllPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  const navigation = useNavigation(); // ✅ Get navigation object

  useEffect(() => {
    axios
      .get('https://plantify-backend-n824.onrender.com/api/plants')
      .then((response) => {
        let plants = [];

        if (Array.isArray(response.data)) {
          plants = response.data;
        } else if (Array.isArray(response.data.plants)) {
          plants = response.data.plants;
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

    const filtered = allPlants.filter((plant) =>
      plant?.name?.toLowerCase?.().includes(text.toLowerCase())
    );

    setFilteredPlants(filtered);
  };

  const handlePress = (plant) => {
    navigation.navigate('PlantDetail', { plant }); // ✅ Navigate to detail
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
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View className="flex-row items-center space-x-3 border-b border-gray-200 p-2">
              {item.img_url && (
                <Image
                  source={{ uri: item.img_url }}
                  style={{ width: 50, height: 50, borderRadius: 8 , marginRight: 12}}
                />
              )}
              <Text className="text-lg">{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
