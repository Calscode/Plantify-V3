import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { CameraButton } from '../components/Camera/CameraButton';

export const ButtonBar = () => {
    const navigation = useNavigation();
  return (
    <View className="flex-row justify-around items-center bg-white border-t border-gray-300 py-3"
    >
      <TouchableOpacity className="items-center" onPress={() => navigation.navigate('Home')}>
        <Text className="text-gray-700">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <Text className="text-gray-700">Search</Text>
      </TouchableOpacity>

      <CameraButton />

      <TouchableOpacity className="items-center">
        <Text className="text-gray-700">Profile</Text>
      </TouchableOpacity>
    </View>
  );
};