import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../../common/GlobalStyles';

export const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: '#857251',
        marginBottom: '30px',
        ...setFontStyles({ weight: 700, size: '20px' }),
    },
    closeIcon: {
        backgroundColor: 'black',
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 5,
    },
    text: {
        textAlign: 'center',
        color: '#857251',
        marginBottom: '30px',
        ...setFontStyles(),
    },
    textBold: {
        textAlign: 'center',
        color: '#857251',
        marginBottom: '30px',
        ...setFontStyles({ weight: 700 }),
    },
    container: {
        paddingTop: '50px',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
});
