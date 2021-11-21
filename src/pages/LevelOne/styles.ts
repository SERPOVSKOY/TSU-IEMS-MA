import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../common/GlobalStyles';

export const styles = StyleSheet.create({
    sceneContainer: {
        paddingLeft: '10px',
        paddingRight: '10px',
        marginTop: '15px',
        marginBottom: '15px',
    },
    container: {
        marginTop: '15px',
        paddingLeft: '40px',
        paddingRight: '40px',
        marginBottom: '15px',
    },
    text: {
        textAlign: 'center',
        marginBottom: '15px',
        ...setFontStyles({ size: '15px' }),
    },
    buttonGameContainer: {
        marginTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    title: {
        textAlign: 'center',
        color: '#252424',
        paddingTop: '10px',
        paddingBottom: '10px',
        ...setFontStyles({ weight: 700 }),
    },
    text4: {
        textAlign: 'center',
        color: '#212121',
        marginBottom: '30px',
        marginTop: '30px',
        ...setFontStyles({ weight: 300, size: '18px' }),
    },
    text2: {
        textAlign: 'center',
        color: '#857251',
        marginTop: '30px',
        marginBottom: '30px',
        ...setFontStyles({ weight: 700 }),
    },
    text3: {
        paddingLeft: '20px',
        paddingRight: '20px',
        ...setFontStyles({ size: '16px' }),
    },
    regButton: {
        textAlign: 'center',
        color: '#827153',
        marginBottom: '30px',
        borderRadius: 10,
        width: 'fit-content',
        ...setFontStyles(),
    }
});
