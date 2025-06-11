import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { useUser } from '../UserContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const [username, setLocalUsername] = useState('');
  const { setUsername, loginAsGuest } = useUser(); // ✅ Hook called inside component

  const handleContinue = () => {
    setUsername(username.trim());
    navigation.replace('Home');
  };

  const handleGuest = () => {
    loginAsGuest();
    setUsername('Guest'); // Optional: show @Guest on profile
    navigation.replace('Home');
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
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default LoginScreen;