import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { primary } from '../components/styles/colors';

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <br/>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Info')}
        />
        <StatusBar style="auto" />
      </View>
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