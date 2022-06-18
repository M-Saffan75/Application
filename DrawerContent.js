import {TouchableOpacity, StyleSheet, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { DrawerContentScrollView, DrawerItem, DrawerItemList, } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'


const DrawerContent = props => {
const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}
                /* contentContainerStyle={{ backgroundColor: '#8200d6' }} */ >
                <ImageBackground source={require('./images/texture.jpg')}
                    style={{ padding: 30 }}
                >
                    <Image source={require('./images/perfect.jpg')}
                        style={{ height: 80, width: 80, borderRadius: 50 ,}}
                    />
                    <Text style={{ color: '#4eb6aa',marginTop:10, fontSize: 18, fontFamily: 'Poppins-SemiBold' }}>Jogn Doe</Text>
                </ImageBackground>
                <View style={{ paddingTop: 17 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#4eb6aa' }}>
            <TouchableOpacity onPress={()=>navigation.navigate('Form')} activeOpacity={0.8}>    
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome5 style={{ marginRight: 18 }} name='sign-out-alt' color={'#000'} size={17} />
                        <Text >Sign Out</Text>
                    </View>

            </TouchableOpacity>
            </View>
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    bottomDrawerSection: {

        borderTopColor: '#4eb6aa',
        borderTopWidth: .5,
    },
});