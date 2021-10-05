import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Coinitems from '../components/Coinitems';
import ChartItems from '../components/ChartItems';

const Stack = createNativeStackNavigator();

const MainRouter = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Coinitems} />
          <Stack.Screen name="Details" component={ChartItems} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default MainRouter

const styles = StyleSheet.create({})
