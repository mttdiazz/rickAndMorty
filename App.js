import React from 'react';
import { Image } from 'react-native';
import Home from './components/Home.js';
import Saved from './components/Saved.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App(){
    return(
    <NavigationContainer >
            <Tab.Navigator     
                initialRouteName = 'home'
                screenOptions = {({ route }) => ({
                    tabBarActiveTintColor: '#97ce4c',
                    tabBarInactiveTintColor: '#97ce4c',
                    tabBarActiveBackgroundColor: 'grey',
                    tabBarInactiveBackgroundColor: 'black',
                    tabBarIcon: () => {
                        if (route.name === 'Home') {
                            return( 
                                <Image style = {{ width: 30, height: 30  }} source = {require('./assets/home.png')} />
                     )}
                        else if (route.name === 'Saved Characters') {
                            return (
                            <Image style = {{ width: 30, height: 30  }} source = {require('./assets/saved.png')} />
                    )}
                    },          
                })} 
            >
                <Tab.Screen name = 'Home' component = {Home} options = {{ headerShown: false }} />
                <Tab.Screen  name = 'Saved Characters' component = {Saved} options = {{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};