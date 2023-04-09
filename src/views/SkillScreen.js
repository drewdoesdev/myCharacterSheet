import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SkillScreen() {
    return (
        <View style={styles.container}>
            <Text>Your skill goes here!</Text>
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
