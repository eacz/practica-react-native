import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'

interface Props {
  title: string,
  position?: 'bottom-left' | 'bottom-right',
  onPress: () => void
}

const Fab = ({title, onPress, position="bottom-right"}: Props) => {

  const ios = () => {
    return (
      <TouchableOpacity
      style={[styles.fabLocation, position === 'bottom-left' ? styles.left : styles.right]} 
      activeOpacity={0.75}
      onPress={onPress} 
      >
        <View style={styles.fab}>
          <Text style={styles.fabText} >{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  const android = () => {
    return (
      <View
      style={[styles.fabLocation, position === 'bottom-left' ? styles.left : styles.right]}>
          <TouchableNativeFeedback 
            onPress={onPress} 
            background={TouchableNativeFeedback.Ripple('#28425B', false, 30)} >
              <View style={styles.fab}>
                <Text style={styles.fabText} >{title}</Text>
              </View>
        </TouchableNativeFeedback>
      </View>
  
    )
  }
  
  return Platform.OS === 'ios' ? ios() : android()
}

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 20,
  },
  right: {
    right: 25
  },
  left: {
    left: 25
  },
  fab: {
    backgroundColor: '#5856D6',
    height: 60,
    width: 60,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  fabText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Fab
