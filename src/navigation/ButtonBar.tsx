import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { CameraButton } from '../components/Camera/CameraButton';

export const ButtonBar = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-around border-t border-gray-300 bg-white py-3">
      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate('Home')}
        accessibilityLabel="Go to Home">
        <Ionicons name="home-outline" size={28} color="#4B5563" />
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate('SearchScreen')} // <-- Change here
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
  );
};
