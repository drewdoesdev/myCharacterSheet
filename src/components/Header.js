import { StyleSheet, Text, View } from 'react-native';
import { primary } from './styles/colors';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: primary.teil,
    },
    headerText: {
        color: primary.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
