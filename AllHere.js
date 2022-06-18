import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Hotel1 from './Hotel1'

const AllHere = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                <View>
                    <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate('Hotel1')}>
                        <ImageBackground source={require('./images/hotel1.jpg')} style={styles.img} >

                            <View style={{ alignItems: 'flex-end', }}>

                                <Text style={{
                                    color: '#fff', fontFamily: 'OpenSans-Bold', fontSize: 22,
                                    width: 80, backgroundColor: '#4eb6aa', padding: 5, height: 60, textAlignVertical: 'center', textAlign: 'center',
                                    borderBottomLeftRadius: 20,
                                }}>$180
                                </Text>

                            </View>
                        </ImageBackground>

                        <View>
                            <View style={{ width: 190, padding: 10, marginLeft: 10, backgroundColor: '#fff', borderRadius: 20, top: -50, paddingVertical: 15, paddingHorizontal: 15, elevation: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#000', fontFamily: 'OpenSans-Bold', fontSize: 14 }}>Silver Hotel & SPA</Text>
                                    <FontAwesome5 name='save' color={'#4eb6aa'} size={21} />
                                </View>

                                <View style={{ paddingVertical: 2 }}>
                                    <Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', }}>Green Street Central District</Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                                    <View style={{ flexDirection: 'row', }}>

                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#000'} style={{ paddingHorizontal: 1 }} />
                                    </View>
                                    <View><Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', letterSpacing: .4, }}>365reviews</Text></View>
                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6}>
                        <ImageBackground source={require('./images/hotel2.jpg')} style={styles.img}>

                            <View style={{ alignItems: 'flex-end', }}>

                                <Text style={{
                                    color: '#fff', fontFamily: 'OpenSans-Bold', fontSize: 22,
                                    width: 80, backgroundColor: '#4eb6aa', padding: 5, height: 60, textAlignVertical: 'center', textAlign: 'center',
                                    borderBottomLeftRadius: 20,
                                }}>$220
                                </Text>

                            </View>
                        </ImageBackground>

                        <View>
                            <View style={{ width: 190, padding: 10, marginLeft: 10, backgroundColor: '#fff', borderRadius: 20, top: -50, paddingVertical: 15, paddingHorizontal: 15, elevation: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#000', fontFamily: 'OpenSans-Bold', fontSize: 14 }}>Mercure Centre</Text>
                                    <FontAwesome5 name='save' color={'#4eb6aa'} size={21} />
                                </View>

                                <View style={{ paddingVertical: 2 }}>
                                    <Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', }}>Hotel Des Fonatines</Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                                    <View style={{ flexDirection: 'row', }}>

                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                    </View>
                                    <View><Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', letterSpacing: .4, }}>195reviews</Text></View>
                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.6}>
                        <ImageBackground source={require('./images/hotel3.jpg')} style={styles.img}>

                            <View style={{ alignItems: 'flex-end', }}>

                                <Text style={{
                                    color: '#fff', fontFamily: 'OpenSans-Bold', fontSize: 22,
                                    width: 80, backgroundColor: '#4eb6aa', padding: 5, height: 60, textAlignVertical: 'center', textAlign: 'center',
                                    borderBottomLeftRadius: 20,
                                }}>$199
                                </Text>

                            </View>
                        </ImageBackground>

                        <View>
                            <View style={{ width: 190, padding: 10, marginLeft: 10, backgroundColor: '#fff', borderRadius: 20, top: -50, paddingVertical: 15, paddingHorizontal: 15, elevation: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#000', fontFamily: 'OpenSans-Bold', fontSize: 14 }}>Citizem Paris Lyon</Text>
                                    <FontAwesome5 name='save' color={'#4eb6aa'} size={21} />
                                </View>

                                <View style={{ paddingVertical: 2 }}>
                                    <Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', }}>Hipotel Paris Bastille</Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                                    <View style={{ flexDirection: 'row', }}>

                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                    </View>
                                    <View><Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', letterSpacing: .4, }}>267reviews</Text></View>
                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.6}>
                        <ImageBackground source={require('./images/hotel4.jpg')} style={styles.img}>

                            <View style={{ alignItems: 'flex-end', }}>

                                <Text style={{
                                    color: '#fff', fontFamily: 'OpenSans-Bold', fontSize: 22,
                                    width: 80, backgroundColor: '#4eb6aa', padding: 5, height: 60, textAlignVertical: 'center', textAlign: 'center',
                                    borderBottomLeftRadius: 20,
                                }}>$260
                                </Text>

                            </View>
                        </ImageBackground>

                        <View>
                            <View style={{ width: 190, padding: 10, marginLeft: 10, backgroundColor: '#fff', borderRadius: 20, top: -50, paddingVertical: 15, paddingHorizontal: 15, elevation: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#000', fontFamily: 'OpenSans-Bold', fontSize: 14 }}>Ibis  Cambrone</Text>
                                    <FontAwesome5 name='save' color={'#4eb6aa'} size={21} />
                                </View>

                                <View style={{ paddingVertical: 2 }}>
                                    <Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', }}>Jacobs Inn Hostel</Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                                    <View style={{ flexDirection: 'row', }}>

                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                    </View>
                                    <View><Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', letterSpacing: .4, }}>365reviews</Text></View>
                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.6}>
                        <ImageBackground source={require('./images/hotel5.jpg')} style={styles.img}>

                            <View style={{ alignItems: 'flex-end', }}>

                                <Text style={{
                                    color: '#fff', fontFamily: 'OpenSans-Bold', fontSize: 22,
                                    width: 80, backgroundColor: '#4eb6aa', padding: 5, height: 60, textAlignVertical: 'center', textAlign: 'center',
                                    borderBottomLeftRadius: 20,
                                }}>$300
                                </Text>

                            </View>
                        </ImageBackground>

                        <View>
                            <View style={{ width: 190, padding: 10, marginLeft: 10, backgroundColor: '#fff', borderRadius: 20, top: -50, paddingVertical: 15, paddingHorizontal: 15, elevation: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#000', fontFamily: 'OpenSans-Bold', fontSize: 14 }}>Novotal Paris Les</Text>
                                    <FontAwesome5 name='save' color={'#4eb6aa'} size={21} />
                                </View>

                                <View style={{ paddingVertical: 2 }}>
                                    <Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', }}>Villa sSaint - Honore</Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                                    <View style={{ flexDirection: 'row', }}>

                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                        <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                                    </View>
                                    <View><Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', letterSpacing: .4, }}>417reviews</Text></View>
                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AllHere

const styles = StyleSheet.create({
    categoryListText: {
        color: 'black',
        paddingHorizontal: 5,
        fontFamily: 'Poppins-SemiBold'
    },

    img: {
        height: 250,
        width: 190,
        marginLeft: 10,
        borderRadius: 20,
        overflow: 'hidden',
    },
})