import * as Font from 'expo-font';

export const fonts = () => Font.loadAsync({
    'OpenSans': require('./OpenSans-Regular.ttf'),
    'OpenSans-Light': require('./OpenSans-Light.ttf'),
    'OpenSans-Medium': require('./OpenSans-Medium.ttf'),
    'OpenSans-SemiBold': require('./OpenSans-SemiBold.ttf'),
    'OpenSans-Bold': require('./OpenSans-Bold.ttf'),
    'OpenSans-ExtraBold': require('./OpenSans-ExtraBold.ttf'),
});