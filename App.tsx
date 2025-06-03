import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '~/components/Screens/Header';
import { ScreenContent } from '~/components/Screens/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { ButtonBar } from 'navigation/ButtonBar';
import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <ScreenContent title="Home" path="App.tsx" />
      <StatusBar style="auto" />
      <ButtonBar />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
