import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import { useUser } from '../UserContext';
import { RootStackParamList } from '../../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen() {
  const route = useRoute();
  const { username } = useUser();

   const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const savedItems = [
    { id: '1', name: 'Rose' },
    { id: '2', name: 'Sunflower' },
    { id: '3', name: 'Cactus' },
  ];

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

      <Text style={styles.savedTitle}>Saved Items</Text>
      <FlatList
        data={savedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.savedItem}>
            <Text style={styles.savedItemText}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No saved items</Text>}
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
  avatarButton: {
    alignSelf: 'center',
    marginBottom: 12,
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
  avatarSection: {
  alignItems: 'center',
  marginBottom: 24,
},
username: {
  fontSize: 20,
  fontWeight: '600',
  marginTop: 8,
  color: '#333',
},
});