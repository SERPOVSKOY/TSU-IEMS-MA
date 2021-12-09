import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../common/GlobalStyles';

export const Styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        textAlign: 'center',
        color: '#857251',
        marginBottom: 30,
        ...setFontStyles({ weight: 700, size: 20 }),
    },
});
