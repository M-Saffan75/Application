import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = () => {

    const btn = () => {
        if(backgroundColor == 'orange')
        {
            backgroundColor = 'red'
            console.log('Done')
        }
        else {
            backgroundColor== 'orange'
        }
    }
  return (
    <View>
      <Text style={{color:'#000' , padding:20 , borderWidth:2, borderColor:'#000',textAlign:'center' , backgroundColor:'orange'}} onClick={btn}>
          Button
        </Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})