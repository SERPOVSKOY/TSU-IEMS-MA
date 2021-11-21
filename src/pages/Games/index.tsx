import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LevelTwo } from '../LevelTwo';
import { LevelOne } from '../LevelOne';

const Tab = createMaterialTopTabNavigator();

const Games = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: '#fbfbfa' },
            }}
        >
            <Tab.Screen name="Уровень 1" component={LevelOne} />
            <Tab.Screen name="Уровень 2" component={LevelTwo} />
        </Tab.Navigator>
    );
};

export { Games };
