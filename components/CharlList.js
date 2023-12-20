import React, {useEffect, useState, useRef} from 'react';
import { 
  StyleSheet, View, Text,
   FlatList, Image, ActivityIndicator, TextInput, TouchableOpacity, Modal, Animated
} from 'react-native';
import Button from './Boton';
import Dropdown from './Dropdown';
import { PopUp } from './PopUp';
import styles from './styles/styles.js';
import {db} from '../firebaseConfig.js';
import { get, child } from 'firebase/database';
import {set, ref, remove} from 'firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import { setModalVisible } from '../redux/reducers.js';


const CharList = ({item,changeModalVisibility,modalData,isModalVisible}) => {
      //fav icon
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const snapshot = await get(child(ref(db), `Characters/${item.id}`));
        setFlag(snapshot.exists());
      } catch (error) {
        console.error('Error checking favorite status: ', error);
      }
    };

    checkFavoriteStatus();
  }, [item.id]);

  const SaveItem = (rowItem) => {
    setFlag(true);
    console.log('Se ha guardado a: ' + rowItem);
    set(ref(db, 'Characters/'+rowItem.id),{
      character: rowItem
    })
    .then(() => {
      console.log('Data saved successfully!');
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
    Animated.timing( flipAnimation, {
      toValue: 360,
      duration: 1500,
      useNativeDriver: true,
    } ).start();
    };
    const flipAnimation = useRef( new Animated.Value( 0 ) ).current;
    let flipRotation = 0;
    flipAnimation.addListener( ( { value } ) => flipRotation = value );
    const fliptStyle = {
      transform: [
        {
          rotateX: flag
            ? flipAnimation.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              })
            : flipAnimation.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
        },
      ],
    };
    
    return(
        <View style ={styles.itemRow}>
          <Animated.View style={{...fliptStyle  }}>
          <TouchableOpacity style={styles.touchableOpacity} onPress={() => changeModalVisibility(true,item)}>
            <Image source={{uri:item.image }} style={styles.itemImage}/>
            </TouchableOpacity>
          
            <Text style={styles.itemText}>{item.name} </Text>
              {!flag && (<TouchableOpacity onPress={() => SaveItem(item)}>
              <Image style= {styles.favIcon} source={require('../assets/emptyfav.png')}/>
              </TouchableOpacity>
              )}
              {flag && (<TouchableOpacity>
              <Image style= {styles.favIcon} source={require('../assets/fullfav.png')}/>
              </TouchableOpacity>
              )}
          </Animated.View>
  
        
  
            <Modal transparent = {true} animationType='fade' visible={isModalVisible} nRequestClose={()=> {dispatch(setModalVisible)}}> 
              <PopUp modalData={modalData}
                changeModalVisibility={changeModalVisibility}
              ></PopUp>
            </Modal>        
        </View>
      )
}
export default CharList;