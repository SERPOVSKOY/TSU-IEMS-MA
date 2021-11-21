import React, {FC, useState} from 'react';
import { Image, Text, View, Button, ScrollView } from 'react-native';
import { styles } from './styles';
import { RegModal } from './RegModal';
import {InfoModal} from "./InfoModal";

const MainPage: FC<{ navigation: any }> = ({ navigation }) => {
    const [isOpenRegModal, setIsOpenRegModal] = useState(false);
    const [isOpenInfoModal, setIsOpenInfoModal] = useState(false);

    const onClick = () => navigation.navigate('QuestsPage');

    return (
        <View style={{ height: '100%' }}>
            <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
                <Image source={require('./assets/banner.jpg')} style={styles.banner} />
                <View style={styles.sceneContainer}>
                    <Text style={styles.title}>Привет! Мы рады видеть Вас на нашем профориентационном квесте!</Text>
                    <Text style={styles.text}>Обязательно пройдите регистрацию перед участием в квесте!</Text>
                    <Button color="#827153" title="Регистрация" onPress={() => setIsOpenRegModal(true)} />
                    <Text style={styles.text2}>
                        Рекомендуем прочитать инструкцию, перед тем, как приступить к выполнению заданий
                    </Text>
                    <Button
                        color="#827153"
                        title="Инструкция"
                        onPress={() => setIsOpenInfoModal(true)}
                    />
                </View>
                <View style={styles.wrapperImage}>
                    <Image source={require('./assets/banner2.png')} style={styles.banner2} />
                </View>
                <Text style={styles.text3}>
                    Дорогой друг!<br /><br />
                    Перед тобой стоит выбор направления обучения и будущей профессии. Это очень важный
                    шаг для каждого человека, от правильности которого зависит многое в твоей жизни.<br /><br />
                    Придуманный Джоан Роулинг мир о Гарри Поттере был наполнен магией, и одна из самых волшебных
                    вещей в нём - это Распределяющая шляпа, выбирающая за
                    учеников факультет в Хогвартсе. Только подумайте: не нужно беспокоиться о том, какие сдавать
                    экзамены, не нужно искать вузы и специальности, не нужно волноваться, понравится ли
                    обучение и пригодится ли оно в будущем...<br /><br />
                    К сожалению, в нашем мире такой шляпы нет, а советов от
                    родителей, друзей и соседей недостаточно, чтобы быть уверенным в выборе
                    направления обучения. Решение об освоении какой-либо профессии - очень ответственный шаг,
                    ведь специальность должна быть востребованной, прибыльной,
                    современной, а также интересной и увлекательной.<br /><br />
                    Мы решили, что многим школьникам не хватает волшебства и подсказок в
                    таком важном выборе, поэтому создали свою "распределяющую шляпу",
                    а точнее - профориентационной квест. Благодаря нему вы сможете узнать
                    максимум полезной информации об экономических направлениях университета,
                    внимательно изучить их и найти то, что будет близко для сердца и
                    любопытно для изучения.<br /><br />
                </Text>
                <View style={styles.wrapperImage}>
                    <Image source={require('./assets/banner3.png')} style={styles.banner2} />
                </View>
                <Text style={styles.text3}>
                    Том Сойер - прирожденный предприниматель, а также рисковый человек!
                    Благодаря своим способностям, он заставлял соседских
                    мальчишек красить забор, которые
                    сами же и платили за это различными предметами! Том попадал в
                    различные ситуации из которых успешно выбирался - целое приключение!<br /><br />
                    У него сильно развиты предпринимательские способности, но ему не хватало
                    знаний, а перед Вами открыты все пути. Учитесь, развивайте свои навыки,
                    узнавайте новую информацию и рискуйте! Риск - благородное дело, зачастую он ведет к успеху.
                    А риск, основанный на знаниях законов экономики и финансов - практически гарантирует успех!<br /><br />
                    Проходи квест вместе с нашими героями, и шаг за шагом ты будешь понимать,
                    что важно именно для тебя, какое направление обучения станет ближе.
                    Возникнут вопросы - обращайтесь к организаторам.<br />Мы Вам поможем!
                </Text>
                <View style={styles.buttonGameContainer}>
                    <Text style={styles.text}>Для перехода к заданиям нажмите на кнопку ниже.</Text>
                    <Button color="#9b1a1a" title="Играть" onPress={onClick} />
                    <Text style={styles.text4}>Желаем удачи в прохождении нашего квеста "Выбери свой путь"!</Text>
                </View>
            </ScrollView>
            <RegModal isOpen={isOpenRegModal} onClose={() => setIsOpenRegModal(false)} />
            <InfoModal isOpen={isOpenInfoModal} onClose={() => setIsOpenInfoModal(false)} />
        </View>
    );
};

export { MainPage };
