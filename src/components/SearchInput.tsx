import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {useState, useEffect} from 'react';
import {useDebounceValue} from '../hooks/useDebounceValue';

interface Props {
  onDebounce: (value: string) => void;
}

export const SearchInput = ({onDebounce}: Props) => {
  const [textValue, setTextValue] = useState('');
  const deboBAUNCEvALUE = useDebounceValue(textValue);

  useEffect(() => {
    onDebounce(deboBAUNCEvALUE);
  }, [deboBAUNCEvALUE]);

  return (
    <View style={{}}>
      <View style={styles.textBusqueda}>
        <TextInput
          placeholder="Name or Id"
          style={{
            flex: 1,
            fontSize: 18,
            color: 'white',
          }}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
          maxLength={10}
        />

        <Image
          source={require('../assets/lupa-de-busqueda.png')}
          style={{
            width: 25,
            height: 25,
          }}
        />
      </View>
    </View>
  );
};
