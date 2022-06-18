import { StyleSheet, ScrollView, ImageBackground, SafeAreaView, TouchableOpacity,Text, View, StatusBar } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Bookmark = ({navigation}) => {
    return (
        <SafeAreaView >
            <StatusBar translucent backgroundColor={'#e5e5e5'} />
            <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#fff">
                <View style={{ marginTop: 50 }} backgroundColor="#fff">
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} >
                        <Text style={{
                            borderColor: '#4eb6aa', borderWidth: 2, borderRadius: 10,
                            height: 40, width: 40,textAlign:'center',textAlignVertical:'center'
                        }}>
                            <FontAwesome5 name='angle-left' size={25} style={{ color: '#000' , textAlign:'center'}} /></Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#fff', marginHorizontal:15, paddingVertical:15, width: '50%', borderRadius: 15, fontFamily: 'OpenSans-Bold',
                         textAlign: 'center', alignItems: 'center', backgroundColor: '#4eb6aa' }}>Your Bookmarks </Text>
                    </View>
                    <View style={{ marginVertical: 10, marginHorizontal: 10, borderRadius: 10, overflow: 'hidden', }}>
                        <ImageBackground source={require('./images/hotel1.jpg')} style={{ height: 200 }} resizeMode='cover'>

                            <View style={{ height: 200, backgroundColor: 'rgba(0 , 0 , 0 , .2)' }}>
                                <View style={{ paddingLeft: 10, alignContent: 'center', position: 'absolute', bottom: 0, }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <FontAwesome5 name='bookmark' color={'#4eb6aa'} size={22} style={{ fontWeight:900, paddingVertical: 10, }} />
                                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'OpenSans-Bold', marginLeft: 10, }}> Paris</Text>
                                    </View>
                                    <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'OpenSans-Bold', }}>For Gathering & Mettings</Text>
                                    <Text style={{
                                        paddingVertical: 5, width: 100, textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 3,
                                        marginVertical: 10, letterSpacing: 1, marginLeft: 0, fontSize: 12, backgroundColor: '#4eb6aa', color: '#fff', fontFamily: 'OpenSans-Bold'
                                    }}>Book Now</Text>
                                </View>
                            </View>

                        </ImageBackground>
                    </View>
                    <View style={{ marginVertical: 10, marginHorizontal: 10, borderRadius: 10, overflow: 'hidden' }}>
                        <ImageBackground source={require('./images/hotel2.jpg')} style={{ height: 200 }} resizeMode='cover'>

                            <View style={{ height: 200, backgroundColor: 'rgba(0 , 0 , 0 , .2)' }}>
                                <View style={{ paddingLeft: 10, alignContent: 'center', position: 'absolute', bottom: 0, }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <FontAwesome5 name='bookmark' color={'#4eb6aa'} size={22} style={{ fontWeight:900, paddingVertical: 10, }} />
                                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'OpenSans-Bold', marginLeft: 10, }}> Paris</Text>
                                    </View>
                                    <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'OpenSans-Bold', }}>For ReFreshment & Meetup</Text>
                                    <Text style={{
                                        paddingVertical: 5, width: 100, textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 3,
                                        marginVertical: 10, letterSpacing: 1, marginLeft: 0, fontSize: 12, backgroundColor: '#4eb6aa', color: '#fff', fontFamily: 'OpenSans-Bold'
                                    }}>Book Now</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ marginVertical: 10, marginHorizontal: 10, borderRadius: 10, overflow: 'hidden' }}>
                        <ImageBackground source={require('./images/hotel3.jpg')} style={{ height: 200 }} resizeMode='cover'>

                            <View style={{ height: 200, backgroundColor: 'rgba(0 , 0 , 0 , .2)' }}>
                                <View style={{ paddingLeft: 10, alignContent: 'center', position: 'absolute', bottom: 0, }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <FontAwesome5 name='bookmark' color={'#4eb6aa'} size={22} style={{ fontWeight:900, paddingVertical: 10, }} />
                                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'OpenSans-Bold', marginLeft: 10, }}> Paris</Text>
                                    </View>
                                    <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'OpenSans-Bold', }}>For Guest & Meetings</Text>
                                    <Text style={{
                                        paddingVertical: 5, width: 100, textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 3,
                                        marginVertical: 10, letterSpacing: 1, marginLeft: 0, fontSize: 12, backgroundColor: '#4eb6aa', color: '#fff', fontFamily: 'OpenSans-Bold'
                                    }}>Book Now</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ marginVertical: 10, marginHorizontal: 10, borderRadius: 10, overflow: 'hidden' }}>
                        <ImageBackground source={require('./images/hotel6.jpg')} style={{ height: 200 }} resizeMode='cover'>

                            <View style={{ height: 200, backgroundColor: 'rgba(0 , 0 , 0 , .2)' }}>
                                <View style={{ paddingLeft: 10, alignContent: 'center', position: 'absolute', bottom: 0, }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <FontAwesome5 name='bookmark' color={'#4eb6aa'} size={22} style={{ fontWeight:900, paddingVertical: 10, }} />
                                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'OpenSans-Bold', marginLeft: 10, }}> Paris</Text>
                                    </View>
                                    <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'OpenSans-Bold', }}>For Guest & Meetings</Text>
                                    <Text style={{
                                        paddingVertical: 5, width: 100, textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 3,
                                        marginVertical: 10, letterSpacing: 1, marginLeft: 0, fontSize: 12, backgroundColor: '#4eb6aa', color: '#fff', fontFamily: 'OpenSans-Bold'
                                    }}>Book Now</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ marginVertical: 10, marginHorizontal: 10, borderRadius: 10, overflow: 'hidden' }}>
                        <ImageBackground source={require('./images/hotel7.jpg')} style={{ height: 200 }} resizeMode='cover'>

                            <View style={{ height: 200, backgroundColor: 'rgba(0 , 0 , 0 , .2)' }}>
                                <View style={{ paddingLeft: 10, alignContent: 'center', position: 'absolute', bottom: 0, }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <FontAwesome5 name='bookmark' color={'#4eb6aa'} size={22} style={{ fontWeight:900, paddingVertical: 10, }} />
                                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'OpenSans-Bold', marginLeft: 10, }}> Paris</Text>
                                    </View>
                                    <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'OpenSans-Bold', }}>For Guest & Meetings</Text>
                                    <Text style={{
                                        paddingVertical: 5, width: 100, textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 3,
                                        marginVertical: 10, letterSpacing: 1, marginLeft: 0, fontSize: 12, backgroundColor: '#4eb6aa', color: '#fff', fontFamily: 'OpenSans-Bold'
                                    }}>Book Now</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bookmark

const styles = StyleSheet.create({})