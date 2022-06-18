import { StyleSheet, SafeAreaView, Text, StatusBar, View, Image, ImageBackground } from 'react-native'
import React from 'react'

const Portfolio = () => {
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor={'#e5e5e5'} />
            {/* <View style={{ backgroundColor: '#c4e7e3', height: '100%' }}>
                <View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./images/hotel1.jpg')} style={{ height: 150, width: 150, marginTop: 40, borderRadius: 100 }} />
                        <Text style={{ color: 'grey', fontFamily: 'Poppins-Bold', fontSize: 20, margin: 10 }}><Text style={{letterSpacing:4 , fontFamily:'Poppins-Bold'}}>𝓗𝓮𝓵𝓵𝓸 </Text>John Doe</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 20, marginVertical: 30 }}>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey" }}>Name :</Text>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey", marginLeft: 5, letterSpacing: .6 }}>John Doe</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 20, marginTop: 15 }}>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey" }}>Flat No :</Text>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey", marginLeft: 5, letterSpacing: .6 }}>302</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 20, marginTop: 15 }}>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey" }}>Your Email :</Text>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey", marginLeft: 5, letterSpacing: .6 }}>Johndoe@gmail.com</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 20, marginTop: 15 }}>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey" }}>Your Address :</Text>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey", marginLeft: 5, letterSpacing: .6 }}>Pakistan Hyderabad</Text>
                    </View>

                    <View style={{ flexDirection: 'row', margin: 20, marginTop: 15 }}>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey" }}>Condtion :</Text>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey", marginLeft: 5, letterSpacing: .6 }}>Four Rooms + Gallery</Text>
                    </View>

                    <View style={{ flexDirection: 'row', margin: 20, marginTop: 15 }}>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey" }}>Current balance :</Text>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey", marginLeft: 5, letterSpacing: .6 }}>2 Month Agreement</Text>
                    </View>

                    <View style={{ flexDirection: 'row', margin: 20, marginTop: 15 }}>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey" }}>Your Pregress :</Text>
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey", marginLeft: 5, letterSpacing: .6 }}>Very Good</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', margin: 20, marginTop: 15 }}>
                    <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey" }}>Current balance :</Text>
                    <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: "grey", marginLeft: 5, letterSpacing: .6 }}>$783</Text>
                </View>
            </View> */}
            <View style={{ height:'100%',alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontFamily:'OpenSans-Bold' , color:'grey'}}>Account Portion on the way !</Text>
            </View>
        </SafeAreaView>
    )
}

export default Portfolio

const styles = StyleSheet.create({})