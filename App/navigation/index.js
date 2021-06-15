import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../containers';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StoresScreen} from '../containers/StoresScreen';
import {colors, routeName} from '../utils';
const Stack = createStackNavigator();
const bottomTabNav = createBottomTabNavigator();

function ResturentStack() {
  return (
    <Stack.Navigator headerMode={'none'} keyboardHandlingEnabled={true}>
      <Stack.Screen name={routeName.HOME} component={HomeScreen} />
     
    </Stack.Navigator>
  );
}
function RecipeStack() {
  return (
    <Stack.Navigator headerMode={'none'} keyboardHandlingEnabled={true}>
      <Stack.Screen name={routeName.STORES} component={StoresScreen} />
    
    </Stack.Navigator>
  );
}

function BottomTab() {
  return (
    <bottomTabNav.Navigator
    initialRouteName=''
      tabBarOptions={{
        activeTintColor: colors.primary,
        showLabel: false,
        
      }}>
      <bottomTabNav.Screen
        name="Resturents"
        component={ResturentStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="food-fork-drink" color={color} size={size} />

          ),
        }}
      />
      <bottomTabNav.Screen
        name="Recipe"
        component={RecipeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
        }}
      />
    </bottomTabNav.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer >
      <Stack.Navigator  headerMode={'none'} keyboardHandlingEnabled={true}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {Router};
