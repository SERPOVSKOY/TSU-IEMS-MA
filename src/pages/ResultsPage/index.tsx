import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Styles } from './styles';
import { WebView } from 'react-native-webview';

const ResultsPage = () => {
    return (
        <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
            <View style={Styles.container}>
                <Text style={Styles.title}>Результаты</Text>
            </View>
            <WebView style={{ height: 500 }} source={{ uri: 'https://docs.google.com/spreadsheets/u/0/d/1Og3hNASIN-2WBySoQq-yPTk6RUsEPPBYzjN_x5QTukY/htmlembed/sheet?headers=false&gid=0'}} />
        </ScrollView>
    );
};

export { ResultsPage };
