import {Modal, Dimensions, TouchableOpacity, 
StyleSheet, View, Text, Image,ImageBackground} from 'react-native'
import React from 'react'
import styles from './styles/styles.js';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = 150;
const PopUp = (props) => {

    closeModal = (bool) => {
        props.changeModalVisibility(bool);
    }

    return (
    <TouchableOpacity disabled={true} style={StyleSheet.popUp}>
        <View style={styles.modal}>
        <ImageBackground source={require('../src/portal.png')} style={{width: '100%', height: '100%'}}> 
            <Text style={styles.titlePopUp}>{props.modalData.name}</Text>
            <Image source={{uri:props.modalData.image }} style={styles.avatar}/>
            <View style={styles.charInfo}>
                <Text style={styles.text}> Status:  {props.modalData.status}</Text>
                <Text style={styles.text}> Species:  {props.modalData.species}</Text>
                <Text style={styles.text}> Type:  {props.modalData.type}</Text>
                <Text style={styles.text}> Gender:  {props.modalData.gender}</Text>
                <Text style={styles.text}> Last Known Location:  {props.modalData.origin.name}</Text>
            </View>
            <View styles= {styles.closeButton}>
                <TouchableOpacity styles={styles.touchableOpacityPopUp} onPress= {() => closeModal (false, 'Volver')}>
                    <Text style={styles.volverButton} >Close</Text>
                </TouchableOpacity>

            </View>
            </ImageBackground>
        </View>
    </TouchableOpacity>


    )
}


export {PopUp}
