import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { useState, useEffect } from 'react';
import { useDebounceValue } from '../hooks/useDebounceValue';

interface Props{
    onDebounce:(value:string) => void; 
}

export const SearchInput = ( {onDebounce}: Props) => {

    const [textValue, setTextValue] = useState('');
    const  deboBAUNCEvALUE=useDebounceValue(textValue);
    
    useEffect( () => {
        onDebounce(deboBAUNCEvALUE);
    },[deboBAUNCEvALUE])

  return (
    <View style={{}}>
        <View style={styles.textBusqueda}>
            <TextInput
            placeholder='Pokemon a buscar'
            style={{
                flex:1,
                fontSize:18,
            }}
            autoCapitalize='none'
            autoCorrect={false}
            value = {textValue}
            onChangeText={setTextValue}
            />

            <Image
                source={ require('../assets/lupa.png')}
                style={{width:40, height:40,backgroundColor:'white',borderRadius:30,left:16}}
            />
        </View>
    </View>
    )
}
