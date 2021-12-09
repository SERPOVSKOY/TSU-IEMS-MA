import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

const LevelTwo = () => {
    return (
        <ScrollView style={{ height: '100%' }}>
            <View style={styles.sceneContainer}>
                <Text style={styles.text}>
                    После прохождения уровня 2 - вы можете проверить результаты, перейдя в третий пункт нижнего меню
                </Text>
            </View>

            <ScrollView horizontal style={{ height: '100%' }}>
                {/* <iframe
                    scrolling="yes"
                    width="520px"
                    height="520px"
                    src="https://docs.google.com/drawings/d/1lz3tIx95VEvUdMNZVdrTKZJYNP9PhMAd5JuXiWp8WiY/preview?ac=true&authuser=0"
                /> */}
            </ScrollView>
        </ScrollView>
    );
};

export { LevelTwo };
