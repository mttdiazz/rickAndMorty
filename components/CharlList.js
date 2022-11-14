import React, {useEffect, useState} from 'react';
import { 
  StyleSheet, View, Text,
   FlatList, Image, ActivityIndicator, TextInput, TouchableOpacity, Modal
} from 'react-native';
import Button from './Boton';
import Dropdown from './Dropdown';
import { PopUp } from './PopUp';
import styles from './styles/styles.js';




const CharList = ({item,changeModalVisibility,modalData,isModalVisible}) => {
      //fav icon
  const [flag, setFlag] =useState(false);
  const SaveItem = (rowItem) => {
    setFlag(true);
    console.log('Se ha guardado a: ' + rowItem.name);
    };
    return(
        <View style ={styles.itemRow}>
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
      
  
        
  
            <Modal transparent = {true} animationType='fade' visible={isModalVisible} nRequestClose={()=> changeModalVisibility(false)}> 
              <PopUp modalData={modalData}
                changeModalVisibility={changeModalVisibility}
              ></PopUp>
            </Modal>        
        </View>
      )
}
export default CharList;