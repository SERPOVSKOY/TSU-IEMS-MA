import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../common/GlobalStyles';

export const Styles = StyleSheet.create({
    container: {
        paddingTop: '30px',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    banner: {
        display: 'flex',
        height: '300px',
        width: '100%',
        maxWidth: '335px',
    },
    conImage: {
        height: '100%',
        width: '100%',
    },
    containerCon: {
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
    },
    con: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        color: '#857251',
        ...setFontStyles({ weight: 700, size: '20px' }),
    },
    title3: {
        textAlign: 'center',
        color: '#857251',
        marginTop: '30px',
        ...setFontStyles({ weight: 700, size: '20px' }),
    },
    title2: {
        textAlign: 'center',
        color: '#857251',
        ...setFontStyles({ weight: 500, size: '15px' }),
    },
    link: {
        textAlign: 'center',
        color: '#000000',
        textDecorationLine: 'underline',
        ...setFontStyles({ weight: 600 }),
    },
    subtitle: {
        textAlign: 'center',
        color: 'black',
        marginBottom: '10px',
        marginTop: '30px',
        ...setFontStyles({ weight: 600, size: '18px' }),
    },
});
