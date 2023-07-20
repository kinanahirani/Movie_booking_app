import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookMovie from '../screens/BookMovie/BookMovie';
import TabBar from './TabBar';
import SelectSeats from '../screens/SelectSeats/SelectSeats';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='TabBar'>
      <Stack.Screen name='TabBar' component={TabBar}/>
      <Stack.Screen name="BookMovie" component={BookMovie}/> 
      <Stack.Screen name="SelectSeats" component={SelectSeats}/> 
    </Stack.Navigator>
  );
};

export default AppNavigator;
