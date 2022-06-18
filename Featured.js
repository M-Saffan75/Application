import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, StatusBar, ImageBackground,ScrollView } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Featured = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.openDrawer();
    }
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor={'#e5e5e5'} />
            <ScrollView Horizontal backgroundColor="#fff">
            <View>

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
                    <Text style={{ color: 'black', paddingHorizontal: 12, fontSize: 12, fontFamily: 'OpenSans-Bold' }} onPress={() => navigation.navigate('TopRated')}>Top Rated</Text>
                    <Text style={{ color: '#4eb6aa', paddingHorizontal: 12, fontSize: 12, fontFamily: 'OpenSans-Bold', borderBottomWidth: 3, borderBottomColor: '#4eb6aa', }}>Featured</Text>
                    <Text style={{ color: 'black', paddingHorizontal: 12, fontSize: 12, fontFamily: 'OpenSans-Bold' }} onPress={() => navigation.navigate('Luxury')}>Luxury</Text>
                </View>

                <View>
                    <View>
                    <View>
                        <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: 'Poppins-Bold', color: '#000', paddingBottom: 10, }}>Featured</Text>
                    </View>
                    <View style={{flexDirection:'row' , justifyContent:'space-between'  ,
                         backgroundColor:'#fff' , elevation:4,margin:10,borderRadius:10,alignItems:'center'}}>
                        <ImageBackground source={require('./images/hotel19.jpg')} style={{ height: 90, width: 90, borderRadius: 10, overflow: 'hidden' }} />
                       
                        
                            <View style={{position:'absolute' , left:80 , marginLeft:15 , Lineheight:3,}}>
                                <Text style={{fontSize:16 ,color:'#000', fontFamily:'Poppins-Bold'}}>Comforts </Text>
                                <Text style={{color:'grey' , fontSize:12, fontFamily:'Poppins-Bold'}}>STARTER</Text>
                                
                                  <View style={{flexDirection:'row'}}>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'grey'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'grey'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                  </View>

                            </View>

                            <View style={{marginRight:10, flexDirection:'column' , alignItems:'center'}}>
                                <Text style={{color:'grey' ,fontFamily:'OpenSans-Bold', fontSize:17 ,}}>$200</Text>
                                <Text style={{borderWidth:2,fontFamily:'OpenSans-SemiBold' ,color:'#fff' , borderColor:'#4eb6aa' , backgroundColor:'#4eb6aa' , borderRadius:20 ,paddingVertical:5, paddingHorizontal:15, textAlign:'center', marginTop:5}}>Add</Text>
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row' , justifyContent:'space-between'  ,
                         backgroundColor:'#fff' , elevation:4,margin:10,borderRadius:10,alignItems:'center'}}>
                        <ImageBackground source={require('./images/hotel20.jpg')} style={{ height: 90, width: 90, borderRadius: 10, overflow: 'hidden' }} />
                       
                        
                            <View style={{position:'absolute' , left:80 , marginLeft:15 , Lineheight:3,}}>
                                <Text style={{fontSize:16 ,color:'#000', fontFamily:'Poppins-Bold'}}>Light In </Text>
                                <Text style={{color:'grey' , fontSize:12, fontFamily:'Poppins-Bold'}}>EXPENSIVE</Text>
                                
                                  <View style={{flexDirection:'row'}}>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'grey'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                  </View>

                            </View>

                            <View style={{marginRight:10, flexDirection:'column' , alignItems:'center'}}>
                                <Text style={{color:'grey' ,fontFamily:'OpenSans-Bold', fontSize:17 ,}}>$550</Text>
                                <Text style={{borderWidth:2,fontFamily:'OpenSans-SemiBold' ,color:'#fff' , borderColor:'#4eb6aa' , backgroundColor:'#4eb6aa' , borderRadius:20 ,paddingVertical:5, paddingHorizontal:15, textAlign:'center', marginTop:5}}>Add</Text>
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row' , justifyContent:'space-between'  ,
                         backgroundColor:'#fff' , elevation:4,margin:10,borderRadius:10,alignItems:'center'}}>
                        <ImageBackground source={require('./images/hotel21.jpg')} style={{ height: 90, width: 90, borderRadius: 10, overflow: 'hidden' }} />
                       
                        
                            <View style={{position:'absolute' , left:80 , marginLeft:15 , Lineheight:3,}}>
                                <Text style={{fontSize:16 ,color:'#000', fontFamily:'Poppins-Bold'}}>Sun Rise </Text>
                                <Text style={{color:'grey' , fontSize:12, fontFamily:'Poppins-Bold'}}>EXTREMELY</Text>
                                
                                  <View style={{flexDirection:'row'}}>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                  </View>

                            </View>

                            <View style={{marginRight:10, flexDirection:'column' , alignItems:'center'}}>
                                <Text style={{color:'grey' ,fontFamily:'OpenSans-Bold', fontSize:17 ,}}>$800</Text>
                                <Text style={{borderWidth:2,fontFamily:'OpenSans-SemiBold' ,color:'#fff' , borderColor:'#4eb6aa' , backgroundColor:'#4eb6aa' , borderRadius:20 ,paddingVertical:5, paddingHorizontal:15, textAlign:'center', marginTop:5}}>Add</Text>
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row' , justifyContent:'space-between'  ,
                         backgroundColor:'#fff' , elevation:4,margin:10,borderRadius:10,alignItems:'center'}}>
                        <ImageBackground source={require('./images/hotel22.jpg')} style={{ height: 90, width: 90, borderRadius: 10, overflow: 'hidden' }} />
                       
                        
                            <View style={{position:'absolute' , left:80 , marginLeft:15 , Lineheight:3,}}>
                                <Text style={{fontSize:16 ,color:'#000', fontFamily:'Poppins-Bold'}}>Activities </Text>
                                <Text style={{color:'grey' , fontSize:12, fontFamily:'Poppins-Bold'}}>STARTER</Text>
                                
                                  <View style={{flexDirection:'row'}}>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'grey'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'grey'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                  </View>

                            </View>

                            <View style={{marginRight:10, flexDirection:'column' , alignItems:'center'}}>
                                <Text style={{color:'grey' ,fontFamily:'OpenSans-Bold', fontSize:17 ,}}>$200</Text>
                                <Text style={{borderWidth:2,fontFamily:'OpenSans-SemiBold' ,color:'#fff' , borderColor:'#4eb6aa' , backgroundColor:'#4eb6aa' , borderRadius:20 ,paddingVertical:5, paddingHorizontal:15, textAlign:'center', marginTop:5}}>Add</Text>
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row' , justifyContent:'space-between'  ,
                         backgroundColor:'#fff' , elevation:4,margin:10,borderRadius:10,alignItems:'center'}}>
                        <ImageBackground source={require('./images/hotel23.jpg')} style={{ height: 90, width: 90, borderRadius: 10, overflow: 'hidden' }} />
                       
                        
                            <View style={{position:'absolute' , left:80 , marginLeft:15 , Lineheight:3,}}>
                                <Text style={{fontSize:16 ,color:'#000', fontFamily:'Poppins-Bold'}}>Meetings </Text>
                                <Text style={{color:'grey' , fontSize:12, fontFamily:'Poppins-Bold'}}>NORMAL</Text>
                                
                                  <View style={{flexDirection:'row'}}>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                  </View>

                            </View>

                            <View style={{marginRight:10, flexDirection:'column' , alignItems:'center'}}>
                                <Text style={{color:'grey' ,fontFamily:'OpenSans-Bold', fontSize:17 ,}}>$400</Text>
                                <Text style={{borderWidth:2,fontFamily:'OpenSans-SemiBold' ,color:'#fff' , borderColor:'#4eb6aa' , backgroundColor:'#4eb6aa' , borderRadius:20 ,paddingVertical:5, paddingHorizontal:15, textAlign:'center', marginTop:5}}>Add</Text>
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row' , justifyContent:'space-between'  ,
                         backgroundColor:'#fff' , elevation:4,margin:10,borderRadius:10,alignItems:'center'}}>
                        <ImageBackground source={require('./images/hotel24.jpg')} style={{ height: 90, width: 90, borderRadius: 10, overflow: 'hidden' }} />
                       
                        
                            <View style={{position:'absolute' , left:80 , marginLeft:15 , Lineheight:3,}}>
                                <Text style={{fontSize:16 ,color:'#000', fontFamily:'Poppins-Bold'}}>Food Mood</Text>
                                <Text style={{color:'grey' , fontSize:12, fontFamily:'Poppins-Bold' }}>MEDIUM</Text>
                                
                                  <View style={{flexDirection:'row'}}>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'#4eb6aa'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                    <FontAwesome5 name='heart'  color={'grey'} style={{paddingHorizontal:1 ,paddingTop:8, paddingBottom:5 }}/>
                                  </View>

                            </View>

                            <View style={{marginRight:10, flexDirection:'column' , alignItems:'center'}}>
                                <Text style={{color:'grey' ,fontFamily:'OpenSans-Bold', fontSize:17 ,}}>$500</Text>
                                <Text style={{borderWidth:2,fontFamily:'OpenSans-SemiBold' ,color:'#fff' , borderColor:'#4eb6aa' , backgroundColor:'#4eb6aa' , borderRadius:20 ,paddingVertical:5, paddingHorizontal:15, textAlign:'center', marginTop:5}}>Add</Text>
                            </View>
                            
                        </View>

                    </View>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Featured

const styles = StyleSheet.create({})