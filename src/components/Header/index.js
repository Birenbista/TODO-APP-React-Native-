import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

export default function Header() {
    return (
        <View style={styles.container}>
            <FontAwesome5 name="tasks" size={30} />
            <Text>Todo App</Text>
            <Text>by Birendra Bista</Text>
        </View>
    );
}