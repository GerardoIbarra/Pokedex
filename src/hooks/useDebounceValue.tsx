import { useState, useEffect } from 'react';

export const useDebounceValue = ( input : string = '', time:number=500) => {
  const [debouncedValue,setdebouncedValue] = useState(input);

  useEffect( () => {

    const timeeout = setTimeout( () => {
        setdebouncedValue(input);
    }, time )

  return () =>{
    clearTimeout(timeeout);
  }

    },[input])
    return debouncedValue;
}
