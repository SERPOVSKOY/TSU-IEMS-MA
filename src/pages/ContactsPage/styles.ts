import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../common/GlobalStyles';

export const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    banner: {
        display: 'flex',
        height: 300,
        width: '100%',
        maxWidth: 335,
    },
    conImage: {
        height: '100%',
        width: '100%',
    },
    containerCon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    con: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        textAlign: 'center',
        padding: 20,
    },
    title: {
        textAlign: 'center',
        color: '#857251',
        ...setFontStyles({ weight: '700', size: 20 }),
    },
    title3: {
        textAlign: 'center',
        color: '#857251',
        marginTop: 30,
        ...setFontStyles({ weight: '700', size: 20 }),
    },
    title2: {
        textAlign: 'center',
        color: '#857251',
        ...setFontStyles({ weight: '500', size: 15 }),
    },
    link: {
        textAlign: 'center',
        color: '#000000',
        textDecorationLine: 'underline',
        ...setFontStyles({ weight: '600' }),
    },
    subtitle: {
        textAlign: 'center',
        color: 'black',
        marginBottom: 10,
        marginTop: 30,
        ...setFontStyles({ weight: '600', size: 18 }),
    },
});
