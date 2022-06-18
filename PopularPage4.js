import { StyleSheet, ImageBackground, SafeAreaView, ScrollView, Text, View, StatusBar } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const PopularPage4 = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor={'transparent'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <ImageBackground source={require('./images/hotel9.jpg')} style={{ height: 450 }} resizeMode='cover'>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, padding: 20, }}>
                            <View>
                                <FontAwesome5 name='angle-left' color={'#fff'} size={24} onPress={() => navigation.goBack()} />
                            </View>
                            <View>
                                <FontAwesome5 name='heart' color={'#fff'} size={24} />
                            </View>
                        </View>

                    </ImageBackground>
                    <View style={{ margin: 10,marginTop: 5 }}>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: 'grey', fontSize: 16, fontFamily: 'OpenSans-Bold' }}>Popular </Text>

                                <Text style={{ paddingVertical: 5, fontSize: 20, fontFamily: 'OpenSans-Bold', color: '#000' }}>library & Comforts</Text>

                            </View>
                         <View style={{marginVertical:15, marginTop:10 ,}}>
                         <Text style={{ fontSize: 20, color: 'grey', fontFamily: 'OpenSans-Medium' , letterSpacing:1,}}>
                                <FontAwesome5 name='star' color={'#4eb6aa'} size={20} />
                                <FontAwesome5 name='star' color={'#4eb6aa'} size={20} />
                                <FontAwesome5 name='star' color={'#4eb6aa'} size={20} />
                                <FontAwesome5 name='star' color={'#4eb6aa'} size={20} />
                                <FontAwesome5 name='star' color={'#4eb6aa'} size={20} />
                                <Text style={{paddingLeft:10 , color:'grey' , fontSize:20,}}>5.0</Text>
                            </Text>
                         </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'OpenSans-Bold', color: '#000' }}>Rooms : </Text>
                                <Text style={{ fontFamily: 'OpenSans-Medium', color: 'grey',fontSize:12, }}>Four Rooms Attached Bathrooms.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                                <Text style={{ fontFamily: 'OpenSans-Bold', letterSpacing: .5, color: '#000' }}>Food : </Text>
                                <Text style={{ fontFamily: 'OpenSans-Medium', color: 'grey',fontSize:12, letterSpacing: .3 }}>8PM To 12PM & 2AM To 12AM. </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                                <Text style={{ fontFamily: 'OpenSans-Bold', letterSpacing: .5, color: '#000' }}>Customer Service : </Text>
                                <Text style={{ fontFamily: 'OpenSans-Medium', color: 'grey',fontSize:12, letterSpacing: .3 }}>Always Try Better To Customers.  </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 24, fontFamily: 'OpenSans-Bold', color: '#000', marginVertical: 20, }}>About</Text>
                                <Text autoCapitalize={'none'} style={{ color: '#000', letterSpacing: .5, fontFamily: 'OpenSans-Medium', color: 'grey', lineHeight: 20 }}>
                                    A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger,k A Hotel New York, Top Results From Trusted Resources. Search Book A Hotel New York, Get Expert Advice and Curated Content on Searchley. Useful & Relevant.
                                </Text>
                            </View>
                            <View style={{
                                backgroundColor: '#4eb6aa', justifyContent: 'center', marginTop: 30,
                                alignItems: 'center', padding: 13, borderRadius: 5
                            }}>
                                <Text style={{ color: '#fff', fontFamily: 'OpenSans-Bold' }}>Book Now</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PopularPage4

const styles = StyleSheet.create({})