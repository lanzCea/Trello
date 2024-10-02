import { Link, Slot, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import Realm from '../providers/Realm';
import { FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={DarkTheme}>
        <Realm>
          <Stack
        </Realm>
      </ThemeProvider>
      <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}