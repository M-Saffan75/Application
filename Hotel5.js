import { StyleSheet, Text, View, ImageBackground, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Hotel1 = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                
                <ImageBackground source={require('./images/hotel5.jpg')} style={styles.img}>

                    <View style={{ marginTop: 40, paddingHorizontal: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>

                        <FontAwesome5 name={'angle-left'} size={25} color={'#d6d6d6'} onPress={() => navigation.goBack()} />
                        <FontAwesome5 name={'heart'} size={25} color={'#d6d6d6'} />

                    </View>

                </ImageBackground>
                <View style={styles.imageDetails}>

                    <View>
                        <Text style={{ color: '#000', fontSize: 22, fontFamily: 'OpenSens-Bold', fontWeight: 'bold' }}>Novota Paris Les</Text>
                        <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'OpenSens-Bold', letterSpacing: .6, paddingVertical: 5 }}>villa saint Honore</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: '#4eb6aa', alignItems: 'center', justifyContent: 'center', top: -50 }}>
                            <FontAwesome5 name='map-marker-alt' size={24} color={'#fff'} />
                        </View>

                    </View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome5 name='star' color={'#ffcd3c'} size={20} />
                        <FontAwesome5 name='star' color={'#ffcd3c'} size={20} />
                        <FontAwesome5 name='star' color={'#ffcd3c'} size={20} />
                        <FontAwesome5 name='star' color={'#ffcd3c'} size={20} />
                        <FontAwesome5 name='star' color={'#ffcd3c'} size={20} />
                        <Text style={{ marginLeft: 10, fontSize: 18, fontFamily: 'OpenSans-Bold', color: '#000' }}>5.0</Text>
                    </View>

                    <View>
                        <Text style={{ color: 'grey', fontSize: 12, fontSize: 11, fontFamily: 'OpenSans-Bold', letterSpacing: .4, }}>417reviews</Text>
                    </View>

                </View>

                <View style={{ paddingHorizontal: 20, paddingVertical: 20, width: '100%' }}>
                    <Text style={{ lineHeight: 23, fontSize: 13, fontFamily: 'OpenSans-Bold', color: 'grey', letterSpacing: .2 }}>
                        Welcome to Silva Hotel Spa-Balmoral, a contemporary 4-star hotel in Spa Belgium with on-site restaurant bar
                        business and wellness facilities. SILVER STAR Hotel & Spa has accommodations in Tăşnad. Featuring family rooms this
                        property also provides guests with a terrace.

                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                    <Text style={{ fontFamily: 'OpenSans-Bold', fontWeight: 'bold', paddingHorizontal: 20, fontSize: 20, color: '#000' }}>Price Per Day</Text>
                    <View>
                        <Text style={{
                            backgroundColor: '#deeeed', fontSize: 13, letterSpacing: .5, color: 'grey', width: 200, paddingVertical: 12, paddingHorizontal: 10, borderTopLeftRadius: 20
                            , borderBottomLeftRadius: 20, justifyContent: 'center', fontFamily: 'OpenSans-Bold'
                        }}>$300 + breakfast</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={.5}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>

                        <Text style={{ color: '#fff', paddingVertical: 20, width: '90%', borderRadius: 15, fontFamily: 'OpenSans-Bold', textAlign: 'center', alignItems: 'center', backgroundColor: '#4eb6aa' }}>Book Now</Text>

                    </View>

                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Hotel1

const styles = StyleSheet.create({
    img: {
        height: 420,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        overflow: 'hidden'
    },

    imageDetails: {
        padding: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})