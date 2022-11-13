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
                    tabBarActiveBackgroundColor: 'black',
                    tabBarInactiveBackgroundColor: '#7fff00',
                    tabBarIcon: () => {
                        if (route.name === 'home') {
                            return( 
                                <Image style = {{ width: 50, height: 50  }} source = {require('./assets/portal.png')} />
                     )}
                        else if (route.name === 'favorites') {
                            return (
                            <Image style = {{ width: 50, height: 50  }} source = {require('./assets/likeportal.png')} />
                    )}
                    },
                                  
                })} 
            >
                <Tab.Screen name = 'home' component = {HomePage} options = {{ headerShown: false }} />
                <Tab.Screen  name = 'favorites' component = {Favorites} options = {{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
  
};