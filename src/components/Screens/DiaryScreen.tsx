import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface JournalEntry {
  id: string;
  text: string;
  photoUri?: string;
  timestamp: Date;
}

export default function GardeningJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [text, setText] = useState('');
  const [photoUri, setPhotoUri] = useState<string | undefined>(undefined);

  const addEntry = () => {
    if (!text && !photoUri) return;

    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      text,
      photoUri,
      timestamp: new Date(),
    };

    setEntries([newEntry, ...entries]); // latest first
    setText('');
    setPhotoUri(undefined);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.6,
    });

    if (!result.canceled && result.assets.length > 0) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  const renderEntry = ({ item }: { item: JournalEntry }) => (
    <View style={styles.entry}>
      <Text style={styles.timestamp}>
        {item.timestamp.toLocaleString()}
      </Text>
      {item.text ? <Text style={styles.text}>{item.text}</Text> : null}
      {item.photoUri ? (
        <Image source={{ uri: item.photoUri }} style={styles.image} />
      ) : null}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Gardening Journal</Text>
      <TextInput
        placeholder="Write your update..."
        value={text}
        onChangeText={setText}
        multiline
        style={styles.input}
      />
      {photoUri ? (
        <Image source={{ uri: photoUri }} style={styles.preview} />
      ) : null}
      <View style={styles.buttons}>
        <Button title="Pick a Photo" onPress={pickImage} />
        <Button title="Add Entry" onPress={addEntry} />
      </View>
      <FlatList
        data={entries}
        renderItem={renderEntry}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.entries}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5fff5',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    minHeight: 60,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  entries: {
    paddingBottom: 20,
  },
  entry: {
    padding: 12,
    backgroundColor: '#e3ffe3',
    borderRadius: 8,
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 12,
    color: '#555',
  },
  text: {
    marginTop: 4,
    fontSize: 16,
  },
  image: {
    marginTop: 8,
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
});