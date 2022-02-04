import React from 'react';
import { Image, Linking, ScrollView, Text, View, TouchableOpacity } from 'react-native';
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
                <TouchableOpacity onPress={() => {
                    Linking.openURL('https://vk.com/lewcamp')
                }}>
                    <View style={Styles.con}>
                        <Text style={Styles.link}>Группа ЛЭВ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Linking.openURL('http://lev-tmb.ru')
                }}>
                    <View style={Styles.con}>
                        <Text style={Styles.link}>
                            Сайт ЛЭВ
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Linking.openURL('https://vk.com/tsu_econom')
                }}>
                    <View style={Styles.con}>
                        <Text style={Styles.link}>
                            Группа ИЭУиС
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export { ContactsPage };
