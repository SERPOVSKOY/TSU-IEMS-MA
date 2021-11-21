import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native';
import { fonts } from './src/common/fonts';
import { GlobalStyles } from './src/common/GlobalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MainPage } from './src/pages/MainPage';
import { ContactsPage } from './src/pages/ContactsPage';
import { Header } from './src/components/Header';
import { Games } from './src/pages/Games';
import { ResultsPage } from './src/pages/ResultsPage';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return <AppLoading startAsync={fonts} onFinish={() => setIsReady(true)} onError={console.warn} />;
    }

    return (
        <SafeAreaView style={GlobalStyles.app}>
            <Header />
            <NavigationContainer>
                <Tab.Navigator
                    labeled={false}
                    initialRouteName="MainPage"
                    activeColor="#f0edf6"
                    inactiveColor="#000000"
                    barStyle={{ backgroundColor: '#827153' }}
                >
                    <Tab.Screen
                        name="MainPage"
                        component={MainPage}
                        options={{
                            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
                        }}
                    />
                    <Tab.Screen
                        name="Games"
                        component={Games}
                        options={{
                            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="flag" color={color} size={26} />,
                        }}
                    />
                    <Tab.Screen
                        name="ResultsPage"
                        component={ResultsPage}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="chart-line" color={color} size={26} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="ContactsPage"
                        component={ContactsPage}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account-group" color={color} size={26} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
