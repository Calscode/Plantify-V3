// ~/navigation/ButtonBar.tsx
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraButton } from '../components/Camera/CameraButton';

export const ButtonBar = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['bottom']} style={{ backgroundColor: 'white' }}>
      <View className="flex-row items-center justify-around border-t border-gray-300 bg-white py-3">
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate('Home')}
          accessibilityLabel="Go to Home">
          <Ionicons name="home-outline" size={28} color="#4B5563" />
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate('SearchScreen')}
          accessibilityLabel="Go to Search">
          <Ionicons name="search-outline" size={28} color="#4B5563" />
        </TouchableOpacity>

        <CameraButton />

        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate('Profile')}
          accessibilityLabel="Go to Profile">
          <Ionicons name="person-outline" size={28} color="#4B5563" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
