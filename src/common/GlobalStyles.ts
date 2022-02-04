import { StyleSheet } from 'react-native';

export const setFontStyles = (font?: any) => ({
    fontFamily: 'OpenSans',
    fontSize: font?.size ?? 16,
    fontWeight: font?.weight ?? 'normal',
});

export const GlobalStyles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
