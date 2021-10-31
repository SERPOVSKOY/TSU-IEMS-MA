import React from 'react';
import {Text, View} from 'react-native';
import { Styles } from './styles';

const MainPage = () => {
    return (
        <View style={Styles.sceneContainer}>
            <Text style={Styles.text}>Главная страница</Text>
        </View>
    );
};

export { MainPage };
