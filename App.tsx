import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Header } from "~/components/Screens/Header";
import { ButtonBar } from "~/navigation/ButtonBar";
import Homepage from "~/components/Screens/Homepage";
import DiscoveryScreen from "~/components/Screens/DiscoveryScreen";
import HintsScreen from "~/components/Screens/HintsScreen";
import VegCard from "~/components/Screens/Vegcard";
import PlantsCard from "~/components/Screens/Plantscard";
import FruitCard from "~/components/Screens/Fruitscard";
import HintsCard from "~/components/Screens/Hintscard";
import './global.css';
import {View} from "react-native"
import PlantDetailScreen from "~/components/Screens/PlantDetailCard";

export type RootStackParamList = {
  Home: undefined;
  Discovery: undefined;
  HintsScreen: undefined;
  VegCard: undefined;
  PlantsCard: undefined;
  FruitCard: undefined;
  HintsCard: undefined;
  PlantDetail: { plant: any };
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
              <View style={{ flex: 1, paddingBottom: 60 }}>

    <SafeAreaProvider>

      <NavigationContainer>
        <Header />
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Discovery" component={DiscoveryScreen} />
          <Stack.Screen name="HintsScreen" component={HintsScreen} />
          <Stack.Screen name="VegCard" component={VegCard} />
          <Stack.Screen name="PlantsCard" component={PlantsCard} />
          <Stack.Screen name="FruitCard" component={FruitCard} />
          <Stack.Screen name="HintsCard" component={HintsCard} />
          <Stack.Screen name="PlantDetail" component={PlantDetailScreen} />
        </Stack.Navigator>
              <ButtonBar />
        <StatusBar style="auto" />
      </NavigationContainer>

    </SafeAreaProvider>
</View>
  );
}
