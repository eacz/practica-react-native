import React from 'react'
import {Text, View, StyleSheet } from 'react-native'

const FlexBoxScreen = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.box1} >Box 1</Text>
      <Text style={styles.box2} >Box 2</Text>
      <Text style={styles.box3} >Box 3</Text>
      <Text style={styles.box1} >Box 1</Text>
      <Text style={styles.box2} >Box 2</Text>
      <Text style={styles.box3} >Box 3</Text>
      <Text style={styles.box1} >Box 1</Text>
      <Text style={styles.box2} >Box 2</Text>
      <Text style={styles.box3} >Box 3</Text>
      <Text style={styles.box1} >Box 1</Text>
      <Text style={styles.box2} >Box 2</Text>
      <Text style={styles.box3} >Box 3</Text>
      <Text style={styles.box1} >Box 1</Text>
      <Text style={styles.box2} >Box 2</Text>
      <Text style={styles.box3} >Box 3</Text>
      <Text style={styles.box1} >Box 1</Text>
      <Text style={styles.box2} >Box 2</Text>
      <Text style={styles.box3} >Box 3</Text>
      <Text style={styles.box1} >Box 1</Text>
      <Text style={styles.box2} >Box 2</Text>
      <Text style={styles.box3} >Box 3</Text>
      <Text style={styles.box1} >Box 1</Text>
      <Text style={styles.box2} >Box 2</Text>
      <Text style={styles.box3} >Box 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    //flexDirection: 'row',
    //justifyContent: 'flex-end',
    //alignItems: 'flex-end',
    backgroundColor: '#28c4d9',
    alignItems: 'flex-start'
  },
  box1: {
    //flex: 1,
    //width: '100%',
    borderWidth:2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'center'
  },
  box2: {
    borderWidth:2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'flex-start'
  },
  box3: {
    borderWidth:2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'flex-end'
  }
});

export default FlexBoxScreen
