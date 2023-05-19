import React from 'react'
import {ActivityIndicator, Text, View, StyleSheet} from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color="grey" />
      <Text style={styles.color}>Loading....</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    color: 'black',
  },
});