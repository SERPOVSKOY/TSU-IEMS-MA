import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../../common/GlobalStyles';

export const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: '#857251',
        marginBottom: 30,
        ...setFontStyles({ weight: '700', size: 20 }),
    },
    closeIcon: {
        backgroundColor: 'black',
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 5,
    },
    text: {
        textAlign: 'center',
        color: '#857251',
        marginBottom: 30,
        ...setFontStyles(),
    },
    textBold: {
        textAlign: 'center',
        color: '#857251',
        marginBottom: 30,
        ...setFontStyles({ weight: '700' }),
    },
    container: {
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
});
