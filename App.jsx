/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './navigation/BottomTab';

function App() {
  // const isDarkMode = useColorScheme() === 'light';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    // <SafeAreaView>
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
