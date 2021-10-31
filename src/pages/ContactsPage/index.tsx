import React from 'react';
import {Text, View} from 'react-native';
import {styles} from "../MainPage/styles";

const ContactsPage = () => {
    return (
        <View style={styles.sceneContainer}>
            <Text style={styles.text}>Страница контактов</Text>
        </View>
    );
};

export { ContactsPage };
