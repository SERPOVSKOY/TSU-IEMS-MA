import { Modal, Text, View, Linking, ScrollView } from 'react-native';
import React, { FC } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

const InfoModal: FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    return (
        <Modal visible={isOpen}>
            <MaterialCommunityIcons name="close" color="white" size={26} onPress={onClose} style={styles.closeIcon} />
            <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.title}>Шаг первый - Регистрация</Text>
                    <Text style={styles.text}>
                        Для начала Вам нужно зарегистрировать команду, заполнив форму на главной странице, либо нажать
                        кнопку "Регистрация".
                    </Text>
                    <Text style={styles.text}>
                        В случае возникновения вопросов напишите организаторам на почту{' '}
                        <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('mailto:rabiydmitry@gmail.com')}>
                            rabiydmitry@gmail.com
                        </Text>{' '}
                        или{' '}
                        <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://vk.com/dmitryrabiy')}>
                            ВКонтакте
                        </Text>{' '}
                        .
                    </Text>
                    <Text style={styles.title}>Шаг второй - Прохождение</Text>
                    <Text style={styles.text}>
                        Когда Ваша команда зарегистрирована, можно приступать к прохождению профориентационного квеста.
                        Вам будет предоставлено поле с заданиями, на котором первые три из них связаны со школьными
                        науками. После их выполнения Вам предстоит определиться с выбором одного героя и двигаться уже
                        по его направлению, которое также является одним из укрупнённых направлений Института экономики,
                        управления и сервиса ТГУ имени Г.Р. Державина, на которые объявлен набор в 2021 году.
                    </Text>
                    <Text style={styles.title}>Шаг третий - Результаты</Text>
                    <Text style={styles.text}>
                        После выполнения всех заданий Вы можете ознакомиться с итогами перейдя в тревью вкладку нижнего меню
                    </Text>
                </View>
                {/* <iframe width="100%" height="500px" src="https://docs.google.com/presentation/d/1BtAjgAr0UtssExSMNzv21FeLo1kXsels/embed?authuser=0"> </iframe> */}
            </ScrollView>
        </Modal>
    );
};

export { InfoModal };
