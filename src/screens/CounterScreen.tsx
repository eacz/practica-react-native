import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Fab from '../components/Fab';

const CounterScreen = () => {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container} >
      <Text style={styles.contadorText}>
        Contador: {contador}
      </Text>
      <Fab
        title="+1"
        onPress={() => setContador(contador+1)}
      />
      <Fab
        title="-1"
        position="bottom-left"
        onPress={() => setContador(contador-1)}
      />

  
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#ffffff'
  },
  contadorText: {
    fontSize:40, 
    textAlign:'center',
  },
})

export default CounterScreen
