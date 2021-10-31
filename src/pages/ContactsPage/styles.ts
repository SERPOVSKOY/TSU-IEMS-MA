import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../common/GlobalStyles';

export const Styles = StyleSheet.create({
    text: setFontStyles(),
    sceneContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
});
