import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../common/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#827153',
        height: 74,
        shadowRadius:  10,
        shadowOpacity: .5,
        shadowOffset: { height: 5, width: 0 },
        zIndex: 1,
        shadowColor: 'rgba(34, 60, 80, 0.2)',
    },
    logo: {
        color: '#c8ccaf',
        textTransform: 'uppercase',
        letterSpacing: 3,
        textShadow: '3px 2px 4px #302f2f',
        ...setFontStyles({ weight: '700', size: '20px' }),
    },
});
