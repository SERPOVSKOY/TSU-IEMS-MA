import React from 'react';
import { ScrollView, Text, View, Linking, Image, Button } from 'react-native';
import { styles } from './styles';

function LevelOne() {
    const onClick = () => Linking.openURL('https://docs.google.com/drawings/d/1bnNFaPXvaV4npluYUr7l1tjapT8QgglJfWxeBJCoGFg/preview?ac=true&authuser=0');

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
                <Image resizeMode='contain' source={require('./level1.jpg')} style={styles.banner} />    
            </View>
        </ScrollView>
    );
};

export { LevelOne };
