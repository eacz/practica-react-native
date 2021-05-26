import React from 'react';
import { SafeAreaView } from 'react-native';
import FlexBoxScreen from './src/screens/FlexBoxScreen';
//import PositionScreen from './src/screens/PositionScreen';
//import DimensionsScreen from './src/screens/DimensionsScreen';
//import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
//import CounterScreen from './src/screens/CounterScreen';

const App = () => {
  return (
    <SafeAreaView  style={{flex: 1}}>
      <FlexBoxScreen />
    </SafeAreaView>
    //<PositionScreen />
    //<DimensionsScreen />
    //<BoxObjectModelScreen /> 
    //<CounterScreen />
  );
};



export default App;
