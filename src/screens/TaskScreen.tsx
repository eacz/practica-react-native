import React from 'react'
import { View, StyleSheet } from 'react-native'

const TaskScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.blueBox} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#28425B',
      flex: 1,
    },
    purpleBox: {
      width: 100,
      height: 100,
      borderWidth:2,
      borderColor: 'white',
      backgroundColor: '#5856d6',
    },
    orangeBox: {
      width: 100,
      height: 100,
      borderWidth:2,
      borderColor: 'white',
      backgroundColor: '#f0a23b',
    },
    blueBox: {
      width: 100,
      height: 100,
      borderWidth:2,
      borderColor: 'white',
      backgroundColor: '#28c4d9',
    },
});

export default TaskScreen
