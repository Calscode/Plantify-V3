import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '~/components/UserContext';


export const ButtonBar = () => {
  const navigation = useNavigation();
  const { username } = useUser();

  return (
    <SafeAreaView edges={['bottom']} className="bg-white">
      <View className="flex-row items-center justify-around border-t border-gray-300 bg-white py-3">
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="p-2"
          activeOpacity={0.7}
        >
          <Ionicons name="home-outline" size={24} color="#4B5563" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SearchScreen')}
          className="p-2"
          activeOpacity={0.7}
        >
          <Ionicons name="search-outline" size={24} color="#4B5563" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('PhotoIdentifier')}
          className="bg-green-500 p-4 rounded-full shadow-lg"
          activeOpacity={0.8}
        >
          <Ionicons name="camera-outline" size={32} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Profile', { username })}
          className="p-2"
          activeOpacity={0.7}
        >
          <Ionicons name="person-outline" size={24} color="#4B5563" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
