import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../common/GlobalStyles';

export const styles = StyleSheet.create({
    sceneContainer: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    buttonGameContainer: {
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    wrapperImage: {
        padding: 20,
    },
    banner: {
        height: 300,
        width: '100%',
        marginBottom: 20,
    },
    banner2: {
        height: 288,
        width: '100%',
        padding: 20
    },
    title: {
        textAlign: 'center',
        color: '#857251',
        marginBottom: 20,
        ...setFontStyles({ weight: '700' }),
    },
    text: {
        textAlign: 'center',
        color: '#212121',
        marginBottom: 30,
        ...setFontStyles({ weight: '300', size: 18 }),
    },
    text4: {
        textAlign: 'center',
        color: '#212121',
        marginBottom: 30,
        marginTop: 30,
        ...setFontStyles({ weight: '300', size: 18 }),
    },
    text2: {
        textAlign: 'center',
        color: '#857251',
        marginTop: 30,
        marginBottom: 30,
        ...setFontStyles({ weight: '700' }),
    },
    text3: {
        paddingLeft: 20,
        paddingRight: 20,
        ...setFontStyles({ size: 16 }),
    },
    regButton: {
        textAlign: 'center',
        color: '#827153',
        marginBottom: 30,
        borderRadius: 10,
        width: 'fit-content',
        ...setFontStyles(),
    }
});
