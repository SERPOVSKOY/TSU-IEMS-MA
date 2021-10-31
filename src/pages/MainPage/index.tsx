import React from 'react';
import { Image, Text, View, Button, Linking, ScrollView } from 'react-native';
import { styles } from './styles';

const MainPage = () => {
    return (
        <View style={{ height: '100%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('./assets/banner.jpg')} style={styles.banner} />
                <View style={styles.sceneContainer}>
                    <Text style={styles.title}>Привет! Мы рады видеть Вас на нашем профориентационном квесте!</Text>
                    <Text style={styles.text}>Обязательно пройдите регистрацию перед участием в квесте!</Text>
                    <Button
                        color="#827153"
                        title="Регистрация"
                        onPress={() => {
                            Linking.openURL('https://forms.gle/P9gxV1G3vbQNnqMaA');
                        }}
                    />
                    <Text style={styles.text2}>
                        Рекомендуем прочитать инструкцию, перед тем, как приступить к выполнению заданий
                    </Text>
                    <Button
                        color="#827153"
                        title="Инструкция"
                        onPress={() => {
                            Linking.openURL('https://forms.gle/P9gxV1G3vbQNnqMaA');
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export { MainPage };
