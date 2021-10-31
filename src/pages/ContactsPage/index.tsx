import React from 'react';
import {Text, View} from 'react-native';
import {Styles} from "../MainPage/styles";

const ContactsPage = () => {
    return (
        <View style={Styles.sceneContainer}>
            <Text style={Styles.text}>Страница контактов</Text>
        </View>
    );
};

export { ContactsPage };
