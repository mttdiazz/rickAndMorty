import React, {Component} from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './components/HomePage.js';


const Tab = createBottomTabNavigator();

export default function App(){
    return(
    <NavigationContainer>
            <Tab.Navigator 
                
                initialRouteName = 'home'
                screenOptions = {({ route }) => ({
                    tabBarIcon: () => {
                        if (route.name === 'home') {
                            return( 
                                <Image style = {{ width: 50, height: 50  }} source = {require('./assets/portal.png')} />
                )}
                    },
                                  
                })} 
            >
                <Tab.Screen name = 'home' component = {HomePage} options = {{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
    


  
  
};