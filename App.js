import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/screens/Home/Home'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'
import SelectSeats from './src/screens/SelectSeats/SelectSeats'

const App = () => {
  return (
    // <SelectSeats/>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  )
}

export default App