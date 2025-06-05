import { View, Text, Image , TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export const Header = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top']}className="bg-white shadow-md">
<View className="flex-row items-center p-4 w-full mt-2">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>

        <Image
          source={require('../../assets/plantify.png')}
          className="w-8 h-8 mr-2"
          style={{width:32, height:32}}
          resizeMode="contain"
        />
                </TouchableOpacity>

        <Text className="text-lg font-bold text-gray-800">Plantify</Text>
      </View>
    </SafeAreaView>
  );
};