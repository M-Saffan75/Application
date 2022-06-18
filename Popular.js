import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { SafeAreaView } from 'react-native-safe-area-context'

const Popular = ({ navigation }) => {
    
    const onPressHandler = () => {
        navigation.openDrawer();
      }
      
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor={'#e5e5e5'} />
            <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#fff">  
                <View>
                    <View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 30 }}>
                            <Text style={{ fontSize: 30, fontFamily: 'OpenSans-Bold', width: '70%', color: '#000', letterSpacing: -1.1 }}><FontAwesome5 name='align-left' size={24} onPress={onPressHandler}/> </Text>
                            <Image source={require('./images/perfect.jpg')} style={{ height: 50, width: 50, borderRadius: 30 }} />
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginVertical: 15,paddingHorizontal:20, }}>
                        <Text style={{ color: '#000', fontSize: 23, fontFamily: 'OpenSans-Bold' }}>Find Your Hotel In <Text style={{ color: '#4eb6aa', fontFamily: 'Poppins-Bold' }}> Paris</Text></Text>
                        </View>

                        <View style={{ backgroundColor: '#f9f9f9', marginHorizontal: 30, marginVertical: 10, marginBottom: 10, borderRadius: 10, alignItems: 'center', width: '80%', flexDirection: 'row', }}>

                            <FontAwesome5 name='search' size={24} color={'#000'} style={{ marginLeft: 10 }} />
                            <TextInput style={{ marginLeft: 5, color: '#000', width: '80%', paddingHorizontal: 5 }} placeholderTextColor='grey' placeholder='search here' />
                            
                        </View>
                        
                        <View style={{ marginVertical: 5, paddingVertical: 20, flexDirection: 'row',justifyContent:'center', paddingHorizontal:15 }}>
                            <Text style={{ color: 'black', paddingHorizontal: 12,fontSize:12, fontFamily: 'Poppins-Bold' }} onPress={() => navigation.navigate('Home')}>All</Text>
                            <Text style={{ color: '#4eb6aa', paddingHorizontal: 12,fontSize:12, fontFamily: 'OpenSans-Bold', borderBottomWidth: 3, borderBottomColor: '#4eb6aa', }} >Popular</Text>
                            <Text style={{ color: 'black', paddingHorizontal: 12,fontSize:12, fontFamily: 'OpenSans-Bold' ,}} onPress={() => navigation.navigate('TopRated')}>Top Rated</Text>
                            <Text style={{ color: 'black', paddingHorizontal: 12,fontSize:12, fontFamily: 'OpenSans-Bold' }}onPress={() => navigation.navigate('featured')}>Featured</Text>
                            <Text style={{ color: 'black', paddingHorizontal: 12,fontSize:12, fontFamily: 'OpenSans-Bold' }} onPress={() => navigation.navigate('Luxury')}>Luxury</Text>
                        </View>
                        
                    </View>

                    <View>
                        <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: 'Poppins-Bold', color: '#000', paddingBottom: 10, }}>Popular Items</Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, marginLeft: 0 }}>

                                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('PopularPage1')}>

                                    <View style={{ elevation: 6, }}>
                                        <ImageBackground source={require('./images/hotel6.jpg')} style={{
                                            height: 250,
                                            width: 165,
                                            padding:10,

                                            borderRadius: 10,
                                            overflow: 'hidden',
                                            paddingVertical: 20,
                                        }} >
                                            <View style={{ paddingLeft: 4, alignContent: 'center', position: 'absolute', bottom: 0, }}>
                                                <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'OpenSans-Bold', }}>Attaction & Activities</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                    <FontAwesome5 name='map-marker-alt' color={'#fff'} size={20} style={{ fontFamily: 'OpenSans-Bold', paddingVertical: 10, }} />
                                                    <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'OpenSans-Bold', marginLeft: 10, }}> Paris</Text>
                                                </View>
                                                <Text style={{
                                                    paddingVertical: 5, width: 100, textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 3,
                                                    marginVertical: 6, letterSpacing: 1, marginLeft: 5, fontSize: 12, backgroundColor: '#4eb6aa', color: '#fff', fontFamily: 'OpenSans-Bold'
                                                }}>Book Now</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>

                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('PopularPage2')}>
                                    <View>
                                        <View style={{ elevation: 6, }}>
                                            <ImageBackground source={require('./images/hotel7.jpg')} style={{
                                                height: 250,
                                                width: 165,
                                                padding:10,

                                                borderRadius: 10,
                                                overflow: 'hidden',
                                                paddingVertical: 20,
                                            }} >
                                                <View style={{ paddingLeft: 4, alignContent: 'center', position: 'absolute', bottom: 0, }}>
                                                    <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'OpenSans-Bold', }}>Sea & View</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                        <FontAwesome5 name='map-marker-alt' color={'#fff'} size={20} style={{ fontFamily: 'OpenSans-Bold', paddingVertical: 10, }} />
                                                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'OpenSans-Bold', marginLeft: 10, }}> Paris</Text>
                                                    </View>
                                                    <Text style={{
                                                        paddingVertical: 5, width: 100, textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 3,
                                                        marginVertical: 6, letterSpacing: 1, marginLeft: 5, fontSize: 12, backgroundColor: '#4eb6aa', color: '#fff', fontFamily: 'OpenSans-Bold'
                                                    }}>Book Now</Text>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, marginLeft: 5 }}>

                                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('PopularPage3')}>
                                    <View style={{ elevation: 6, }}>
                                        <ImageBackground source={require('./images/hotel8.jpg')} style={{
                                            height: 250,
                                            width: 165,
                                            padding:10,

                                            borderRadius: 10,
                                            overflow: 'hidden',
                                            paddingVertical: 20,
                                        }} >
                                            <View style={{ paddingLeft: 4, alignContent: 'center', position: 'absolute', bottom: 0, }}>
                                                <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'OpenSans-Bold', }}>Comfort & Free Service</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                    <FontAwesome5 name='map-marker-alt' color={'#fff'} size={20} style={{ fontFamily: 'OpenSans-Bold', paddingVertical: 10, }} />
                                                    <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'OpenSans-Bold', marginLeft: 10, }}> Paris</Text>
                                                </View>
                                                <Text style={{
                                                    paddingVertical: 5, width: 100, textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 3,
                                                    marginVertical: 6, letterSpacing: 1, marginLeft: 5, fontSize: 12, backgroundColor: '#4eb6aa', color: '#fff', fontFamily: 'OpenSans-Bold'
                                                }}>Book Now</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>

                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('PopularPage4')}>
                                    <View>
                                        <View style={{ elevation: 6, }}>
                                            <ImageBackground source={require('./images/hotel9.jpg')} style={{
                                                height: 250,
                                                width: 165,
                                                padding:10,

                                                borderRadius: 10,
                                                overflow: 'hidden',
                                                paddingVertical: 20,
                                            }} >
                                                <View style={{ paddingLeft: 4, alignContent: 'center', position: 'absolute', bottom: 0, }}>
                                                    <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'OpenSans-Bold', }}>Library & Comforts</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                        <FontAwesome5 name='map-marker-alt' color={'#fff'} size={20} style={{ fontFamily: 'OpenSans-Bold', paddingVertical: 10, }} />
                                                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'OpenSans-Bold', marginLeft: 10, }}> Paris</Text>
                                                    </View>
                                                    <Text style={{
                                                        paddingVertical: 5, width: 100, textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 3,
                                                        marginVertical: 6, letterSpacing: 1, marginLeft: 5, fontSize: 12, backgroundColor: '#4eb6aa', color: '#fff', fontFamily: 'OpenSans-Bold'
                                                    }}>Book Now</Text>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginVertical: 10, marginHorizontal: 10, borderRadius: 10, overflow: 'hidden', }}>
                                <ImageBackground source={require('./images/hotel1.jpg')} style={{ height: 200 }} resizeMode='cover'>

                                    <View style={{ height: 200, backgroundColor: 'rgba(0 , 0 , 0 , .2)' }}>
                                        <View style={{ paddingLeft: 10, alignContent: 'center', position: 'absolute', bottom: 0, }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                <FontAwesome5 name='map-marker-alt' color={'#fff'} size={20} style={{ fontFamily: 'OpenSans-Bold', paddingVertical: 10, }} />
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
                                                <FontAwesome5 name='map-marker-alt' color={'#fff'} size={20} style={{ fontFamily: 'OpenSans-Bold', paddingVertical: 10, }} />
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
                                                <FontAwesome5 name='map-marker-alt' color={'#fff'} size={20} style={{ fontFamily: 'OpenSans-Bold', paddingVertical: 10, }} />
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

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Popular

const styles = StyleSheet.create({

    img: {
        height: 250,
        width: 165,
        padding:10,
        marginHorizontal: 20,
        borderRadius: 10,
        overflow: 'hidden',
        paddingVertical: 20,
    },
})