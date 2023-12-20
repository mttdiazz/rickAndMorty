import {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles/styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { setShowOptions } from '../redux/reducers.js';
const Dropdown =({
    value={},
    items=[],
    name="",
    onSelect=() =>{},
  }) =>{
    const { showOptions } = useSelector(state => state.application);
    const dispatch = useDispatch();
    return (
        <View>
            <TouchableOpacity
                style={styles.dropdownStyle}
                activeOpacity={0.8}
                onPress={()=>{
                    {dispatch(setShowOptions(!showOptions))}
            }}>
                <Text>{!!value || value.id==0 ? value.name:name}</Text>
            </TouchableOpacity>
            {showOptions && (
                <View>
                    {items.map((val,i) =>{
                        return(
                            <TouchableOpacity
                                key={String(i)}
                                style={{
                                    backgroundColor: '#97ce4c',
                                    borderColor: 'black',
                                    borderWidth: 2,
                                    margin:5,
                                    paddingvertical:8,
                                    borderRadius:5,
                                    paddingHorizontal:6,
                                }}
                                onPress={()=>{
                                    {dispatch(setShowOptions(false))};
                                    onSelect(val);
                                }}>
                                    <Text>{val.id==0 ? '-' : val.name}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            )}
        </View>
    );
  };

  

  export default Dropdown;