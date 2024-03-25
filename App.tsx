/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
 
} from 'react-native';
import { Colors } from './src/config';
import { MainScreen } from './src/screens';


function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.black}
      />
      <MainScreen />
      
    </SafeAreaView>
  );
}


export default App;
