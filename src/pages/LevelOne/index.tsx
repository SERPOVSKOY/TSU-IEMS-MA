import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

const LevelOne = () => {
    return (
        <ScrollView style={{ height: '100%' }}>
            <View style={styles.sceneContainer}>
                <Text style={styles.text}>
                    Ниже предоставлено поле с заданиями, которые нужно выполнить.<br /> Желаем удачной игры!.
                </Text>
            </View>

            <ScrollView horizontal style={{ height: '100%' }}>
                <iframe
                    scrolling="yes"
                    width="520px"
                    height="520px"
                    src="https://docs.google.com/drawings/d/1bnNFaPXvaV4npluYUr7l1tjapT8QgglJfWxeBJCoGFg/preview?ac=true&authuser=0"
                />
            </ScrollView>
        </ScrollView>
    );
};

export { LevelOne };
