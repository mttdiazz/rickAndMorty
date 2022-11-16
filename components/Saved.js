import React,{useState, useEffect, useRef} from 'react';
import { View, ActivityIndicator, Image, Text , StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles/styles.js';
import { db } from '../firebaseConfig.js';
import {update, set, ref, remove, onChildAdded, onChildRemoved } from "firebase/database";
import Button from './Boton.js';


const Saved = () => {
    const [isModalVisible, setisModalVisible] = useState(false) //modal popup para mas informacion
    const [modalData, setModalData] = useState()
    const [isLoading, setisLoading] = useState (false)
    const [data, setData] = useState([]); //Data from the database

    const changeModalVisibility = (bool,data) => {
        setisModalVisible(bool);
        setModalData(data);
      }
      useEffect(() => {
        setisLoading(true)
        onChildAdded(ref(db, 'Characters/'), (char) =>{
            //If already exists, don't add it
            if(data.some((item) => item.id === char.val().character.id)){
                return;
            }
          setData(prevData => [...prevData, char.val().character])
        })
    
        onChildRemoved(ref(db, 'Characters/'), (char) =>{
          setData(prevData => prevData.filter(element => element.id !== char.val().character.id))
        })
      }, [])
      const renderItem = ({item}) => {
        return (
            <View style ={styles.itemRow}>
          <TouchableOpacity style={styles.touchableOpacity} onPress={() => changeModalVisibility(true,item)}>
            <Image source={{uri:item.image }} style={styles.itemImage}/>
            </TouchableOpacity>
            <Text style={styles.itemText}>{item.name} </Text>
            <TouchableOpacity onPress={() => remove(ref(db, 'Characters/'+item.id))}>
            <Image style= {styles.favIcon} source={require('../assets/trash.png')}/>
            </TouchableOpacity>
            </View>
        )
      }
    return (
        <View style={styles.top}>
            <View style={styles.header}>
                <Image source={require('../src/portal.png')} style={StyleSheet.absoluteFill}></Image>
                    <Text style={styles.title}>Your saved characters</Text>
            </View>
            <View style={styles.container}>
                <FlatList 
                    style={styles.container}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
            />
            </View>
        </View>
    )
}


export default Saved;