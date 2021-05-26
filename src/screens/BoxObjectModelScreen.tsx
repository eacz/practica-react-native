import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.title} >BoxObjectModel</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1
  },
  title: {
    fontSize: 20,
    padding: 10,
    paddingVertical: 50,
    //width: 150,
    borderWidth: 5,
    margin: 10,
    marginVertical: 50
  },
})

export default BoxObjectModelScreen
