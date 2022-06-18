import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, StatusBar, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const TopRated = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.openDrawer();
    }
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor={'#e5e5e5'} />
            <ScrollView Vertical showsVerticalScrollIndicator={false} backgroundColor="#fff" style={{ behavior: 'smooth' }}>
                <View style={{backgroundColor:'#fff'}}>

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
                        <Text style={{ color: 'black', paddingHorizontal: 12, fontSize: 12, fontFamily: 'Poppins-Bold' }} onPress={() => navigation.navigate('Home')}>All</Text>
                        <Text style={{ color: 'black', paddingHorizontal: 12, fontSize: 12, fontFamily: 'OpenSans-Bold' }} onPress={() => navigation.navigate('Popular')}>Popular</Text>
                        <Text style={{ color: '#4eb6aa', paddingHorizontal: 12, fontSize: 12, fontFamily: 'OpenSans-Bold', borderBottomWidth: 3, borderBottomColor: '#4eb6aa', }}
                            onPress={() => navigation.navigate('TopRated')}
                        >Top Rated</Text>
                        <Text style={{ color: 'black', paddingHorizontal: 12, fontSize: 12, fontFamily: 'OpenSans-Bold', }} onPress={() => navigation.navigate('Featured')}>Featured</Text>
                        <Text style={{ color: 'black', paddingHorizontal: 12, fontSize: 12, fontFamily: 'OpenSans-Bold' }}onPress={() => navigation.navigate('Luxury')}>Luxury</Text>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: 'Poppins-Bold', color: '#000', paddingBottom: 10, }}>Top Rated</Text>
                    </View>

                    <View>
                        <ImageBackground source={require('./images/hotel13.jpg')} style={{ height: 170, margin: 10, marginVertical:7, borderRadius: 10, overflow: 'hidden' }}>
                            <View style={{ height: 170, backgroundColor: 'rgba(0,0,0,.4)', flexDirection: 'row', }}>
                                <View style={{ position: 'absolute', bottom: 0  , flexDirection:'row',  justifyContent:'center' , width:'100%'}} >
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                </View>
                                <Text style={{color:'#fff' ,fontSize:15 , alignItems:'center' , marginRight:5 , fontFamily:'Poppins-Bold' , position:'absolute', right:0}}>5.0</Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./images/hotel14.jpg')} style={{ height: 170, margin: 10, marginVertical:7, borderRadius: 10, overflow: 'hidden' }}>
                            <View style={{ height: 170, backgroundColor: 'rgba(0,0,0,.4)', flexDirection: 'row', }}>
                                <View style={{ position: 'absolute', bottom: 0  , flexDirection:'row',  justifyContent:'center' , width:'100%'}} >
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                </View>
                                <Text style={{color:'#fff' ,fontSize:15 , alignItems:'center' , marginRight:5 , fontFamily:'Poppins-Bold' , position:'absolute', right:0}}>5.0</Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./images/hotel15.jpg')} style={{ height: 170, margin: 10, marginVertical:7, borderRadius: 10, overflow: 'hidden' }}>
                            <View style={{ height: 170, backgroundColor: 'rgba(0,0,0,.4)', flexDirection: 'row', }}>
                                <View style={{ position: 'absolute', bottom: 0  , flexDirection:'row',  justifyContent:'center' , width:'100%'}} >
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                </View>
                                <Text style={{color:'#fff' ,fontSize:15 , alignItems:'center' , marginRight:5 , fontFamily:'Poppins-Bold' , position:'absolute', right:0}}>5.0</Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./images/hotel16.jpg')} style={{ height: 170, margin: 10, marginVertical:7, borderRadius: 10, overflow: 'hidden' }}>
                            <View style={{ height: 170, backgroundColor: 'rgba(0,0,0,.4)', flexDirection: 'row', }}>
                                <View style={{ position: 'absolute', bottom: 0  , flexDirection:'row',  justifyContent:'center' , width:'100%'}} >
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                </View>
                                <Text style={{color:'#fff' ,fontSize:15 , alignItems:'center' , marginRight:5 , fontFamily:'Poppins-Bold' , position:'absolute', right:0}}>5.0</Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./images/hotel17.jpg')} style={{ height: 170, margin: 10, marginVertical:7, borderRadius: 10, overflow: 'hidden' }}>
                            <View style={{ height: 170, backgroundColor: 'rgba(0,0,0,.4)', flexDirection: 'row', }}>
                                <View style={{ position: 'absolute', bottom: 0  , flexDirection:'row',  justifyContent:'center' , width:'100%'}} >
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                </View>
                                <Text style={{color:'#fff' ,fontSize:15 , alignItems:'center' , marginRight:5 , fontFamily:'Poppins-Bold' , position:'absolute', right:0}}>5.0</Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./images/hotel18.jpg')} style={{ height: 170, margin: 10, marginVertical:7, borderRadius: 10, overflow: 'hidden' }}>
                            <View style={{ height: 170, backgroundColor: 'rgba(0,0,0,.4)', flexDirection: 'row', }}>
                                <View style={{ position: 'absolute', bottom: 0  , flexDirection:'row',  justifyContent:'center' , width:'100%'}} >
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                    <FontAwesome5 name='star' size={14} style={{ color: '#fff', paddingHorizontal:2,paddingVertical:7 }} />
                                </View>
                                <Text style={{color:'#fff' ,fontSize:15 , alignItems:'center' , marginRight:5 , fontFamily:'Poppins-Bold' , position:'absolute', right:0}}>5.0</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TopRated

const styles = StyleSheet.create({})