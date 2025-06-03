import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import { Header } from "react-native/Libraries/NewAppScreen";
import { ButtonBar } from "~/navigation/ButtonBar";
import Homepage from "~/components/Screens/Homepage";
import DiscoveryScreen from "~/components/Screens/DiscoveryScreen"; // Make sure you have this

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Header />
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Discovery" component={DiscoveryScreen} />
          {/* Add more screens here */}
        </Stack.Navigator>
        <ButtonBar />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
