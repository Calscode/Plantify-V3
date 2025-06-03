import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Header = () => {
  return (
    <SafeAreaView edges={['top']}className="bg-white shadow-md">
      <View className="flex-row items-center p-4 w-full -mt-6">
        <Image
          source={require('../../../assets/plantify.png')}
          className="w-8 h-8 mr-2"
          resizeMode="contain"
        />
        <Text className="text-lg font-bold text-gray-800">Plantify</Text>
      </View>
    </SafeAreaView>
  );
};