import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

interface JournalEntry {
  journal_entry_id: number;
  body: string;
  created_at: string;
}

export default function GardeningJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const userId = 1; // Replace with context if needed

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = () => {
    axios
      .get(`https://plantify-backend-n824.onrender.com/api/journals/${userId}`)
      .then((res) => setEntries(res.data.journalEntries.reverse()))
      .catch((err) => {
        console.error('Fetch error:', err);
        Alert.alert('Error', 'Failed to load journal entries.');
      });
  };

  const addEntry = () => {
    if (!text.trim()) return;
    setLoading(true);

    axios
      .post(`https://plantify-backend-n824.onrender.com/api/journals`, {
        user_id: userId,
        body: text,
      })
      .then(() => {
        setText('');
        fetchEntries();
      })
      .catch((err) => {
        console.error('Add entry error:', err);
        Alert.alert('Error', 'Could not add entry.');
      })
      .finally(() => setLoading(false));
  };

  const deleteEntry = (id: number) => {
    Alert.alert('Delete Entry', 'Are you sure you want to delete this entry?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          axios
            .delete(`https://plantify-backend-n824.onrender.com/api/journals/${id}`)
            .then(() => fetchEntries())
            .catch((err) => {
              console.error('Delete error:', err);
              Alert.alert('Error', 'Could not delete entry.');
            });
        },
      },
    ]);
  };

  const renderEntry = ({ item }: { item: JournalEntry }) => (
    <View style={styles.entry}>
      <Text style={styles.timestamp}>{new Date(item.created_at).toLocaleString()}</Text>
      <Text style={styles.text}>{item.body}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteEntry(item.journal_entry_id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
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
      <Button
        title={loading ? 'Adding...' : 'Add Entry'}
        onPress={addEntry}
        disabled={loading}
      />
      <FlatList
        data={entries}
        renderItem={renderEntry}
        keyExtractor={(item) => item.journal_entry_id.toString()}
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
    marginBottom: 12,
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
  deleteButton: {
    marginTop: 8,
    alignSelf: 'flex-end',
    backgroundColor: '#f87171',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  deleteText: {
    color: '#fff',
    fontWeight: '600',
  },
});
