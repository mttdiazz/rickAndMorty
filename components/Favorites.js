import React,{useState, useEffect, useRef} from 'react';
import { View, ActivityIndicator, Image, Text, SafeAreaView, ImageBackground } from 'react-native';
import styles from './styles/styles.js';
import Button from './Boton';


const Favorites = () => {
    return (
        <SafeAreaView>
            <Button>
                <Text>Go to Favorites</Text>
            </Button>
        </SafeAreaView>
    )
}


export default Favorites;