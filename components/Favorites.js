import React,{useState, useEffect, useRef} from 'react';
import { View, ActivityIndicator, Image, Text , StyleSheet} from 'react-native';
import styles from './styles/styles.js';
import Button from './Boton';


const Favorites = () => {
    return (
        <View style={styles.top}>
            <View style={styles.header}>
                <Image source={require('../src/portal.png')} style={StyleSheet.absoluteFill}></Image>
                    <Text style={styles.title}>Your saved characters</Text>
            </View>
        </View>
    )
}


export default Favorites;