import { StyleSheet, Text, View,TextInput, Image, SafeAreaView ,StatusBar } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Luxury = ({navigation}) => {
    const onPressHandler = () => {
        navigation.openDrawer();
    }
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor={'#e5e5e5'} />
                <View backgroundColor='#fff'>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 60 }}>
                        <Text style={{ fontSize: 30, fontFamily: 'OpenSans-Bold', width: '70%', color: '#000', letterSpacing: -1.1 }}><FontAwesome5 name='align-left' size={24} onPress={onPressHandler}/></Text>
                        <Image source={require('./images/perfect.jpg')} style={{ height: 50, width: 50, borderRadius: 30 }} />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginVertical: 15, paddingHorizontal: 20, }}>
                        <Text style={{ color: '#000', fontSize: 23, fontFamily: 'OpenSans-Bold' }}>Find Your Hotel In <Text style={{ color: '#4eb6aa', fontFamily: 'Poppins-Bold' }}> Paris</Text></Text>
                    </View>

                    <View style={{ backgroundColor: '#f9f9f9', marginHorizontal: 30, marginVertical: 10, marginBottom: 10, borderRadius: 10, alignItems: 'center', width: '80%', flexDirection: 'row', }}>

                        <FontAwesome5 name='search' size={24} color={'#000'} style={{ marginLeft: 10 }} />
                        <TextInput style={{ marginLeft: 5, color: '#000', width: '80%', paddingHorizontal: 5 }} placeholder='search here' placeholderTextColor='grey' />
                    </View>

                    <View style={{ marginVertical: 5, paddingVertical: 20, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 15 }}>
                        <Text style={{ color: 'black', paddingHorizontal: 12, fontSize: 12, fontFamily: 'Poppins-Bold' }} onPress={() => navigation.navigate('HomeScreen')}>All</Text>
                        <Text style={{ color: 'black', paddingHorizontal: 12, fontSize: 12, fontFamily: 'OpenSans-Bold' }} onPress={() => navigation.navigate('Popular')}>Popular</Text>
                        <Text style={{ color: 'black', paddingHorizontal: 12, fontSize: 12, fontFamily: 'OpenSans-Bold'  }}onPress={() => navigation.navigate('TopRated')}>Top Rated</Text>
                        <Text style={{ color: 'black', paddingHorizontal: 12, fontSize: 12, fontFamily: 'OpenSans-Bold' }} onPress={() => navigation.navigate('Featured')}>Featured</Text>
                        <Text style={{ color: '#4eb6aa', paddingHorizontal: 12, fontSize: 12, fontFamily: 'OpenSans-Bold',borderBottomWidth: 3, borderBottomColor: '#4eb6aa', }}>Luxury</Text>
                    </View>


                </View>
        </SafeAreaView>
    )
}

export default Luxury

const styles = StyleSheet.create({})