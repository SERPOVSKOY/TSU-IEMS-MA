import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../common/GlobalStyles';

export const Styles = StyleSheet.create({
    container: {
        paddingTop: '30px',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    title: {
        textAlign: 'center',
        color: '#857251',
        marginBottom: '30px',
        ...setFontStyles({ weight: 700, size: '20px' }),
    },
});
