import React from 'react'
import { View, Text } from 'react-native'

const HelloWorldScreen = () => {
  return (
    <View 
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
      }}
    >
        <Text style={{fontSize: 50, textAlign: 'center'}}>Hello World XD</Text>
    </View>
  )
}

export default HelloWorldScreen
