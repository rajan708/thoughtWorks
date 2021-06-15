/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'; 
import * as React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './containers';
import {
  routeName,
  colors,
  images,
  fontScale,
  NotificationHandler,
} from './utils';  
import {Router} from './navigation';

const App = () => {
  return (
    <>
        <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} />
        <StatusBar
          backgroundColor={colors.transparent}
          barStyle={'light-content'}
          translucent={true}
          // hidden={true}
        />
        <Router/>
    </>
  );
};

export default App;
