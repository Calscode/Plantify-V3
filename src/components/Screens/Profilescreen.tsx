import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRoute } from '@react-navigation/native';
import { useUser } from '../UserContext';
import axios from 'axios';
import PlantCard from './PlantCard';

export default function ProfileScreen({ navigation }) {
  const route = useRoute();
  const { username, userId, likedPlantIds, fetchLikedPlants } = useUser();
  const [avatarUri, setAvatarUri] = useState(null);
  const [allPlants, setAllPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchLikedPlants();
    }
  }, [userId]);

  useEffect(() => {
    axios.get('https://plantify-backend-n824.onrender.com/api/plants')
      .then(res => setAllPlants(res.data.plants))
      .catch(err => console.error("Error fetching all plants:", err));
  }, []);

  useEffect(() => {
    if (allPlants.length > 0 && likedPlantIds.length > 0) {
      const matched = allPlants.filter(plant => likedPlantIds.includes(plant.plant_id));
      setFilteredPlants(matched);
    } else {
      setFilteredPlants([]);
    }
  }, [allPlants, likedPlantIds]);

  const pickAvatar = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    })
      .then(result => {
        if (!result.canceled && result.assets.length > 0) {
          setAvatarUri(result.assets[0].uri);
        }
      })
      .catch(error => {
        console.error('Image picking error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.avatarSection}>
        <TouchableOpacity onPress={pickAvatar}>
          {avatarUri ? (
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarPlaceholderText}>👤</Text>
            </View>
          )}
        </TouchableOpacity>
        <Text style={styles.username}>@{username}</Text>
      </View>

      <Text style={styles.savedTitle}>Saved Plants</Text>

      <FlatList
  data={filteredPlants}
  keyExtractor={(item) => item.plant_id.toString()}
  numColumns={2}
  renderItem={({ item }) => (
    <View style={styles.gridItem}>
      <PlantCard plant={item} navigation={navigation} />
    </View>
  )}
  columnWrapperStyle={{ justifyContent: 'space-between' }}
  contentContainerStyle={{ paddingBottom: 100 }}
  ListEmptyComponent={<Text>No saved plants yet.</Text>}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  gridItem: {
  flex: 1,
  margin: 8,
  maxWidth: '48%', 
},
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  avatarPlaceholderText: {
    fontSize: 48,
    color: 'grey',
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 8,
    color: '#333',
  },
  savedTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  savedItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  savedItemText: {
    fontSize: 18,
  },
});