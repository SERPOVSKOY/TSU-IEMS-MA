import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Том и Гарри</Text>
        </View>
    );
};

export { Header };
