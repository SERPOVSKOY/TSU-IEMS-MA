import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './style';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./logo.jpg')} />
        </View>
    );
};

export { Header };
