import {Modal, Dimensions, TouchableOpacity, 
StyleSheet, View, Text, Image,ImageBackground} from 'react-native'
import React from 'react'


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
            <Text style={styles.title}>{props.modalData.name}</Text>
            <Image source={{uri:props.modalData.image }} style={styles.avatar}/>
            <View style={styles.charInfo}>
                <Text style={styles.text}> Status:  {props.modalData.status}</Text>
                <Text style={styles.text}> Species:  {props.modalData.species}</Text>
                <Text style={styles.text}> Type:  {props.modalData.type}</Text>
                <Text style={styles.text}> Gender:  {props.modalData.gender}</Text>
                <Text style={styles.text}> Last Known Location:  {props.modalData.origin.name}</Text>
            </View>
            <View styles= {styles.closeButton}>
                <TouchableOpacity styles={styles.touchableOpacity} onPress= {() => closeModal (false, 'Volver')}>
                    <Text style={styles.volverButton} >Close</Text>
                </TouchableOpacity>

            </View>
            </ImageBackground>
        </View>
    </TouchableOpacity>


    )
}


const styles = StyleSheet.create({
    popUp:{
        flex: 1,

    },
    modal: {
        height: '100%',
        width: '100%' ,
        paddingTop: 10,
        marginTop: 10,
        backgroundColor: '#444444',
        borderRadius: 10,
        alignItems: 'center',
    },
    charInfo:{
        backgroundColor: 'black',
        width: '100%',
        marginTop: 200,
    },
    title:{ 
        fontSize: 40,
        fontWeight: 'bold',
        color: '#97ce4c',
        textAlign: 'center',
    },
    text:{ 
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#97ce4c',
    },
    closeButton: {
        width: '100%',
        flexDirection: 'row'
    },
    touchableOpacity: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    volverButton:{
        color: 'black',
        fontSize: 30,
        borderWidth: 2,
        textAlign: 'center',
        backgroundColor: '#97ce4c',
        marginTop: 30,
        borderRadius: 20,
        paddingHorizontal: 10,

    },
    avatar:{
        width: '80%',
        height: 320,
        resizeMode: 'cover',
        borderRadius: 20,
        borderWidth: 10,
        borderWidth: 15,
        borderColor: '#97ce4c',
        marginLeft: 40,

    }
})


export {PopUp}
