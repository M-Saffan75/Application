import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const DrawerButton = ({navigation}) => {
    const onhandleScreen= () => {
        navigation.openDrawer()
    }
  return (
    <View>
      <Button onPress={onhandleScreen}>
          <FontAwesome5 name='bars' />
      </Button>
    </View>
  )
}

export default DrawerButton

const styles = StyleSheet.create({})