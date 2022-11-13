import React, {Component} from 'react';
import { Image } from 'react-native';
import HomePage from './components/HomePage.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './components/Favorites.js';



const Tab = createBottomTabNavigator();

export default function App(){
    return(
    <NavigationContainer >
            <Tab.Navigator 
                
                initialRouteName = 'home'
                screenOptions = {({ route }) => ({
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                    tabBarActiveBackgroundColor: 'grey',
                    tabBarInactiveBackgroundColor: 'black',
                    tabBarIcon: () => {
                        if (route.name === 'Home Page') {
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
                <Tab.Screen name = 'Home Page' component = {HomePage} options = {{ headerShown: false }} />
                <Tab.Screen  name = 'Saved Characters' component = {Favorites} options = {{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
  
};