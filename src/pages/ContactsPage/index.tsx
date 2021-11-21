import React from 'react';
import { Image, Linking, ScrollView, Text, View } from 'react-native';
import { Styles } from './styles';

const ContactsPage = () => {
    return (
        <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
            <View style={Styles.container}>
                <Text style={Styles.title}>Наша команда</Text>
                <Text style={Styles.subtitle}>Горбунова Ольга</Text>
                <Image source={require('./assets/user1.jpg')} style={Styles.banner} />
                <Text style={Styles.subtitle}>Серповской Алексей</Text>
                <Image source={require('./assets/user2.jpg')} style={Styles.banner} />
            </View>
            <Text style={Styles.title3}>Контакты</Text>
            <View style={Styles.containerCon}>
                <View style={Styles.con}>
                    <Text style={Styles.link} onPress={() => Linking.openURL('https://vk.com/lewcamp')}>
                        Группа ЛЭВ
                    </Text>
                </View>
                <View style={Styles.con}>
                    <Text style={Styles.link} onPress={() => Linking.openURL('http://lev-tmb.ru/')}>
                        Сайт ЛЭВ
                    </Text>
                </View>
                <View style={Styles.con}>
                    <Text style={Styles.link} onPress={() => Linking.openURL('https://vk.com/tsu_econom')}>
                        Группа ИЭУиС
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export { ContactsPage };
