import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../common/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderTopColor: '#827153',
        backgroundColor: '#f2f2f2',
        height: 74,
        shadowRadius:  10,
        shadowOpacity: .5,
        shadowOffset: { height: 5, width: 0 },
        zIndex: 1,
        shadowColor: 'rgba(34, 60, 80, 0.2)',
    },
    logo: {
        color: 'black',
        ...setFontStyles({ weight: '700' }),
    },
});
