import React from 'react'
import { View, StyleSheet, Dimensions, Text, useWindowDimensions } from 'react-native'

//const {width, height} = Dimensions.get('window')
//la diferencia entre 'Dimensions' y el hook 'useWindowDimensions'
//es que el hook actualiza en tiempo real los valores en caso de que cambie (Rotación de pantalla)
//en cambios 'Dimensions' no, toma los valores iniciales y se mantienen

const DimensionsScreen = () => {
    const {width, height} = useWindowDimensions()
    return (
      <View>
        <View style={styles.container}>
          <View style={{...styles.purpleBox, width: width * .7}} />
          <View style={styles.orangeBox} />
        </View>
        <Text style={styles.title} >W: {width} H: {height}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 200,
      backgroundColor: 'red'
    },
    purpleBox: {
      backgroundColor: '#5856D6',
      //width: '50%',
      height: '50%'
    },
    orangeBox: {
      backgroundColor: '#F0A23B'
    },
    title: {
        fontSize: 30
    }
});

export default DimensionsScreen
