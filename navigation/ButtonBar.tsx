import { View, Text, TouchableOpacity } from 'react-native';
import { CameraButton } from '../src/components/Camera/CameraButton';

export const ButtonBar = () => {
  return (
    <View className="flex-row justify-around items-center bg-white border-t border-gray-300 py-3">
      <TouchableOpacity className="items-center">
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