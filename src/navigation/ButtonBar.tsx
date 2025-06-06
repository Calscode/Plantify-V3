// ~/navigation/ButtonBar.tsx
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraButton } from '../components/Camera/CameraButton';
import { useUser } from '~/components/UserContext';


type ButtonBarProps = {
  username: string;
};

export const ButtonBar = () => {
  const navigation = useNavigation();
  const { username } = useUser(); // ✅ Now correctly placed

  return (
    <SafeAreaView edges={['bottom']} style={{ backgroundColor: 'white' }}>
      <View className="flex-row items-center justify-around border-t border-gray-300 bg-white py-3">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={28} color="#4B5563" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <Ionicons name="search-outline" size={28} color="#4B5563" />
        </TouchableOpacity>
        <CameraButton />
        <TouchableOpacity onPress={() => navigation.navigate('Profile', { username })}>
          <Ionicons name="person-outline" size={28} color="#4B5563" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
