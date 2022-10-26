import {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles/styles.js';

const Dropdown =({
    value={},
    items=[],
    name="",
    onSelect=() =>{},
  }) =>{
    const [showOptions, setShowOptions] = useState(false);
    return (
        <View>
            <TouchableOpacity
                style={styles.dropdownStyle}
                activeOpacity={0.8}
                onPress={()=>{
                    setShowOptions(!showOptions)
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
                                    backgroundColor: '#fff',
                                    margin:5,
                                    paddingvertical:8,
                                    borderRadius:5,
                                    paddingHorizontal:6,
                                }}
                                onPress={()=>{
                                    setShowOptions(false);
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