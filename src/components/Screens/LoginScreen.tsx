// ~/components/Screens/LoginScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { useUser } from '../UserContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const [username, setLocalUsername] = useState('');
  const { setUsername } = useUser();

  const handleContinue = () => {
    setUsername(username.trim()); // Save to context
    navigation.replace('Home');
  };

  const handleGuest = () => {
    navigation.replace('Home', { username: 'Guest' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Plantify 🌿</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a username"
        value={username}
        onChangeText={setLocalUsername}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#10b981' }]}
        disabled={!username.trim()}
        onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#6b7280' }]}
        onPress={handleGuest}>
        <Text style={styles.buttonText}>Sign in as Guest</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    marginBottom: 24,
    fontWeight: 'bold',
    color: '#14532d',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginVertical: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default LoginScreen;
