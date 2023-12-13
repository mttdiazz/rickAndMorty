import React,{useState, useEffect, useRef} from 'react';
import { View, ActivityIndicator, Image, Text , StyleSheet, FlatList, TouchableOpacity,Animated, Modal} from 'react-native';
import { PopUp } from './PopUp.js';
import styles from './styles/styles.js';
import { db } from '../firebaseConfig.js';
import {update, set, ref, remove, onChildAdded, onChildRemoved } from "firebase/database";
import Button from './Boton.js';
import { setIsLoading, setisModalVisible } from '../redux/reducers.js';
import { useDispatch, useSelector } from 'react-redux';


const Saved = () => {
    const dispatch = useDispatch();
    const {isModalVisible, isLoading}  = useSelector(state => state.application);
    
    const [modalData, setModalData] = useState()
    const [data, setData] = useState([]); //Data from the database
    //For Animation:
    const AVATAR_SIZE = 380;
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const ITEM_SIZE= AVATAR_SIZE + (10);

    const changeModalVisibility = (bool,data) => {
        {dispatch(setisModalVisible(bool))};
        setModalData(data);
      }
      useEffect(() => {
        {dispatch(setIsLoading(true))}
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
      const renderItem = ({item,index}) => {
        if(item){ //Si matcheo resultados
          const inputRange = [
             -1,
             0,
             ITEM_SIZE * index,
             ITEM_SIZE * (index + 2)
           ]
           const scale = scrollY.interpolate({
             inputRange,
             outputRange: [1,1,1,0]
           })

        return (
          <Animated.View style={{transform:[{scale}]}}>
            <View style ={styles.itemRow}>
              <TouchableOpacity style={styles.touchableOpacity} onPress={() => changeModalVisibility(true,item)}>
                <Image source={{uri:item.image }} style={styles.itemImage}/>
              </TouchableOpacity>
              <Text style={styles.itemText}>{item.name} </Text>
                <TouchableOpacity onPress={() => remove(ref(db, 'Characters/'+item.id))}>
                  <Image style= {styles.favIcon} source={require('../assets/trash.png')}/>
                </TouchableOpacity>
            </View>
            </Animated.View>
        )
        }
      }
    return (
        <View style={styles.top}>
            <View style={styles.header}>
                <Image source={require('../src/portal.png')} style={StyleSheet.absoluteFill}></Image>
                    <Text style={styles.title}>Your saved characters</Text>
            </View>
            <View style={styles.container}>
                <Animated.FlatList 
                    style={styles.container}
                    data={data}
                    keyExtractor={item => item.id}
                    onScroll={Animated.event(
                      [{nativeEvent: {contentOffset: {y: scrollY}}}],
                      {useNativeDriver: true}
                    )}
                    renderItem={renderItem}

            />
            </View>
            <Modal transparent = {true} animationType='fade' visible={isModalVisible} nRequestClose={()=> changeModalVisibility(false)}> 
              <PopUp modalData={modalData}
                changeModalVisibility={changeModalVisibility}
              ></PopUp>
            </Modal>
        </View>
    )
}


export default Saved;