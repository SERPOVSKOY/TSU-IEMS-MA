import React from 'react';
import { ScrollView, Text, View, Linking, Image, Button } from 'react-native';
import { styles } from './styles';

function LevelTwo() {
    const onClick = () => Linking.openURL('https://docs.google.com/drawings/u/0/d/1lz3tIx95VEvUdMNZVdrTKZJYNP9PhMAd5JuXiWp8WiY/preview?ac=true');

    return (
        <ScrollView style={{ height: '100%' }}>
            <View style={styles.sceneContainer}>
                <Text style={styles.text}>
                    {'Ниже предоставлено поле с заданиями, которые нужно выполнить. Для начала игры нажмите на кнопку "Играть". Желаем удачной игры!.'}
                </Text>
                <View style={styles.buttonContainer}>
                    <Button color="#9b1a1a" title="Играть" onPress={onClick} />
                </View> 
            </View>
            <View style={styles.containerTwo}>
                <Image resizeMode='contain' source={require('./level2.jpg')} style={styles.banner} />    
            </View>
        </ScrollView>
    );
};

export { LevelTwo };
