import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react';
import Hotel1 from './Hotel1'
import HomeScreen from './HomeScreen';
import Portfolio from './Portfolio';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Popular from './Popular';
import Bookmark from './Bookmark';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (

    <Tab.Navigator
    backgroundColor='#fff'
      screenOptions={{
        tabBarShowLabel: false, headerShown: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: '#4eb6aa',
          borderTopColor: '#4eb6aa',
          height: 50,
          margin: 10,
          borderRadius: 10,
        }
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => (<FontAwesome5 color={focused ? "#d6d6d6" : "#fff"} size={22} name='home' />) }} />
      <Tab.Screen name="Popular" component={Popular} options={{ tabBarIcon: ({ focused }) => (<FontAwesome5 color={focused ? "#d6d6d6" : "#fff"} size={22} name='search' />) }} />
      <Tab.Screen name="Hotel1" component={Hotel1} options={{
        tabBarIcon: ({ focused }) => (<View style={styles.icon}>
          <FontAwesome5 color={focused ? "#d6d6d6" : "#fff"} size={22} name='plus' />
        </View>)
      }} />
      <Tab.Screen name="account" component={Portfolio} options={{ tabBarIcon: ({ focused }) => (<FontAwesome5 color={focused ? "#d6d6d6" : "#fff"} size={22} name='user' />) }} />
      <Tab.Screen name="Bookmarks" component={Bookmark} options={{ tabBarIcon: ({ focused }) => (<FontAwesome5 color={focused ? "#d6d6d6" : "#fff"} size={22} name='bookmark' />) }} />
    </Tab.Navigator>


  )
}

export default BottomNavigation

const styles = StyleSheet.create({
  icon : {
    backgroundColor:'#4eb6aa',
    height:60,
    width:60,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    top:-25,
    borderColor:'#fff',
    borderWidth:2,
    },
})