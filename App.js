import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/views/HomeScreen';
import SkillScreen from './src/views/SkillScreen';

import { h1 } from './src/components/styles/fonts';
import { primary } from './src/components/styles/colors';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
         initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info" component={SkillScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
