import React from 'react';
import { SafeAreaView } from 'react-native';
import DimensionsScreen from './src/screens/DimensionsScreen';
//import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
//import CounterScreen from './src/screens/CounterScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}} >
      <DimensionsScreen />
    </SafeAreaView>
    //<BoxObjectModelScreen /> 
    //<CounterScreen />
  );
};

export default App;
