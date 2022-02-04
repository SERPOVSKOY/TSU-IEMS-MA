import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../common/GlobalStyles';

export const styles = StyleSheet.create({
    sceneContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 15,
        marginBottom: 15,
    },
    container: {
        marginTop: 15,
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 15,
    },
    text: {
        textAlign: 'center',
        marginBottom: 15,
        ...setFontStyles({ size: 15 }),
    },
    buttonGameContainer: {
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        textAlign: 'center',
        color: '#252424',
        paddingTop: 10,
        paddingBottom: 10,
        ...setFontStyles({ weight: '700' }),
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
    },
    banner: {
        display: 'flex',
        height: 400,
        width: '100%',
    },
    buttonContainer: {
        width: 200,
    },
    buttonContainer2: {
        width: 100,
    },
    containerTwo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
});
