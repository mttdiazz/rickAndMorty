import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button=({onPress, children})=>{
    const {buttonStyle, textStyle}=styles;
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles={
    buttonStyle:{
        alignSelf: 'center',
        backgroundColor: '#97ce4c',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    textStyle:{
        alignSelf: 'center',
        color: 'black',
        fontsize: 16,
        fontWeight: '600',
        paddingVertical: 10,
    }
}

export default Button;