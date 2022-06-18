/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Popular from './Popular';
import Hotel1 from './Hotel1';
import Hotel2 from './Hotel2';
import Hotel3 from './Hotel3';
import Hotel4 from './Hotel4';
import Hotel5 from './Hotel5';
import Hotel7 from './Hotel7';
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import OnBoarding from './OnBoarding'
import PopularPage1 from './PopularPage1';
import BottomNavigation from './BottomNavigation';
import PopularPage2 from './PopularPage2'
import PopularPage3 from './PopularPage3'
import PopularPage4 from './PopularPage4'
import Portfolio from './Portfolio';
import HomeScreen from './HomeScreen'
import Form from './Form';
import Featured from './Featured'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopRated from './TopRated';
import Luxury from './Luxury';
import DrawerContent from './DrawerContent'
import Map from './Map'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import 'react-native-gesture-handler';

import { createDrawerNavigator, } from '@react-navigation/drawer'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (

    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}
    
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {marginLeft:-18, 
        fontFamily:'Poppins-SemiBold',
        fontSize:13,
        letterSpacing:0.7,
        },
        drawerActiveBackgroundColor: '#4eb6aa',
        drawerInactiveBackgroundColor: '#fff',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#000',
        marginTop: 70
      }}
    >
      <Drawer.Screen name='Home' component={BottomNavigation}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name='home' color={color} size={17} />
          )
        }}
      />
      <Drawer.Screen name='Popular' component={Popular}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name='hourglass-start' color={color} size={17} />
          )
        }}
      />
      <Drawer.Screen name='TopRated' component={TopRated}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name='shield-alt' color={color} size={17} />
          )
        }}
      />
      <Drawer.Screen name='Featured' component={Featured}

        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name='hand-holding-usd' color={color} size={17} />
          )
        }}
      />
      <Drawer.Screen name='Luxury' component={Luxury}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name='cocktail' color={color} size={17} />
          )
        }}
      />
      <Drawer.Screen name='Portfolio' component={Portfolio}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name='user-shield' color={color} size={17} />
          )
        }}
      />

    </Drawer.Navigator>


  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='OnBoarding' component={OnBoarding} />
        <Stack.Screen name='HomeScreen' component={BottomNavigation} />
        <Stack.Screen name='Portfolio' component={Portfolio} />
        <Stack.Screen name='Popular' component={Popular} />
        <Stack.Screen name='TopRated' component={TopRated} />
        <Stack.Screen name='Featured' component={Featured} />
        <Stack.Screen name='Luxury' component={Luxury} />
        <Stack.Screen name='Form' component={Form} />
        <Stack.Screen name='Hotel1' component={Hotel1} />
        <Stack.Screen name='Hotel2' component={Hotel2} />
        <Stack.Screen name='Hotel3' component={Hotel3} />
        <Stack.Screen name='Hotel4' component={Hotel4} />
        <Stack.Screen name='Hotel5' component={Hotel5} />
        <Stack.Screen name='Hotel7' component={Hotel7} />
        <Stack.Screen name='PopularPage1' component={PopularPage1} />
        <Stack.Screen name='PopularPage2' component={PopularPage2} />
        <Stack.Screen name='PopularPage3' component={PopularPage3} />
        <Stack.Screen name='PopularPage4' component={PopularPage4} />
        <Stack.Screen name='Map' component={Map} />
        <Stack.Screen name='Home' component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default App;

const styles = StyleSheet.create({});


{/* <Drawer.Screen name='Form' component={Form} /> */ }
{/* <Drawer.Screen name='BottomNavigation' component={BottomNavigation} /> */ }