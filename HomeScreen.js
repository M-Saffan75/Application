import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, TouchableHighlight, ImageBackground, TouchableOpacity, ScrollView,  Image } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');
import Carousel from './Carousel';
/* import { DrawerActions } from '@react-navigation/native'; */
import BottomNavigation from './BottomNavigation'

const HomeScreen = ({ navigation }) => {

  const onPressHandler = () => {
    navigation.openDrawer();
  }
  
  /* onPress={() => navigation.openDrawer()} */

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <StatusBar translucent backgroundColor={'#e5e5e5'} />
      <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#fff">
        <View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 60 }}>
            <Text  style={{ fontSize: 30, fontFamily: 'OpenSans-Bold', width: '70%', color: '#000', letterSpacing: -1.1, }}>
            <FontAwesome5 name='align-left' size={24} onPress={onPressHandler} /></Text>
            <Image source={require('./images/perfect.jpg')} style={{ height: 50, width: 50, borderRadius: 30 }} />
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginVertical: 15,paddingHorizontal:20, }}>
            <Text style={{ color: '#000', fontSize: 23, fontFamily: 'OpenSans-Bold' }}>Find Your Hotel In <Text style={{ color: '#4eb6aa', fontFamily: 'Poppins-Bold' }}> Paris</Text></Text>
          </View>

          <View style={{ backgroundColor: '#f9f9f9', marginHorizontal: 30, marginVertical: 10, marginBottom: 10, borderRadius: 10, alignItems: 'center', width: '80%', flexDirection: 'row', }}>

            <FontAwesome5 name='search' size={24} color={'#000'} style={{ marginLeft: 10 }} />
            <TextInput style={{ marginLeft: 5, color: '#000', width: '80%', paddingHorizontal: 5 }} placeholder='search here' placeholderTextColor='grey' />
          </View>
         
         <View style={{ marginVertical: 5, paddingVertical: 20, flexDirection: 'row',justifyContent:'center', paddingHorizontal:15 }}>
            <Text style={{ color: '#4eb6aa', paddingHorizontal: 12,fontSize:12, fontFamily: 'Poppins-Bold', borderBottomWidth: 3, borderBottomColor: '#4eb6aa', }}>All</Text>
            <Text style={{ color: 'black',  paddingHorizontal: 12,fontSize:12, fontFamily: 'OpenSans-Bold' }} onPress={() => navigation.navigate('Popular')}>Popular</Text>
            <Text style={{ color: 'black',  paddingHorizontal: 12,fontSize:12, fontFamily: 'OpenSans-Bold' }} onPress={() => navigation.navigate('TopRated')}>Top Rated</Text>
            <Text style={{ color: 'black',  paddingHorizontal: 12,fontSize:12, fontFamily: 'OpenSans-Bold' }} onPress={() => navigation.navigate('Featured')}>Featured</Text>
            <Text style={{ color: 'black',  paddingHorizontal: 12,fontSize:12, fontFamily: 'OpenSans-Bold' }} onPress={() => navigation.navigate('Luxury')}>Luxury</Text>
          </View>


        </View>

        <View>

          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}

          <View style={{flexDirection:'row' , justifyContent:'space-around' }}>

            <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate('Hotel1')}>
              <ImageBackground source={require('./images/hotel1.jpg')} style={styles.img} >

                <View style={{ alignItems: 'flex-end', }}>

                  <Text style={{
                    color: '#fff', fontFamily: 'OpenSans-Bold', fontSize: 22,
                    width: 65, backgroundColor: '#4eb6aa', padding: 5, height: 60, textAlignVertical: 'center', textAlign: 'center',
                    borderBottomLeftRadius: 20,
                  }}>$180
                  </Text>

                </View>
              </ImageBackground>

              <View>
                <View style={{ width: 165, padding: 10,  backgroundColor: '#fff', borderRadius: 20, top: -50, paddingVertical: 15, paddingHorizontal: 15, elevation: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000', fontFamily: 'OpenSans-Bold', fontSize: 12 }}>Silver Hotel & SPA</Text>
                    <FontAwesome5 name='bookmark' color={'#4eb6aa'} size={21} />
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
                      <FontAwesome5 name='star' color={'grey'} style={{ paddingHorizontal: 1 }} />
                    </View>
                    <View><Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', letterSpacing: .4, }}>365reviews</Text></View>
                  </View>
                </View>
              </View>

            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Hotel2')}>
              <ImageBackground source={require('./images/hotel2.jpg')} style={styles.img}>

                <View style={{ alignItems: 'flex-end', }}>

                  <Text style={{
                    color: '#fff', fontFamily: 'OpenSans-Bold', fontSize: 22,
                    width: 65, backgroundColor: '#4eb6aa', padding: 5, height: 60, textAlignVertical: 'center', textAlign: 'center',
                    borderBottomLeftRadius: 20,
                  }}>$220
                  </Text>

                </View>
              </ImageBackground>

              <View>
                <View style={{ width: 165, padding: 10,  backgroundColor: '#fff', borderRadius: 20, top: -50, paddingVertical: 15, paddingHorizontal: 15, elevation: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000', fontFamily: 'OpenSans-Bold', fontSize: 12 }}>Mercure Centre</Text>
                    <FontAwesome5 name='bookmark' color={'#4eb6aa'} size={21} />
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
                      <FontAwesome5 name='star' color={'grey'} style={{ paddingHorizontal: 1 }} />
                    </View>
                    <View><Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', letterSpacing: .4, }}>195reviews</Text></View>
                  </View>
                </View>
              </View>

            </TouchableOpacity>

            </View>

            <View style={{flexDirection:'row' , justifyContent:'space-around' }}>

            <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate('Hotel3')}>
              <ImageBackground source={require('./images/hotel3.jpg')} style={styles.img}>

                <View style={{ alignItems: 'flex-end', }}>

                  <Text style={{
                    color: '#fff', fontFamily: 'OpenSans-Bold', fontSize: 22,
                    width: 65, backgroundColor: '#4eb6aa', padding: 5, height: 60, textAlignVertical: 'center', textAlign: 'center',
                    borderBottomLeftRadius: 20,
                  }}>$199
                  </Text>

                </View>
              </ImageBackground>

              <View>
                <View style={{ width: 165, padding: 10,  backgroundColor: '#fff', borderRadius: 20, top: -50, paddingVertical: 15, paddingHorizontal: 15, elevation: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000', fontFamily: 'OpenSans-Bold', fontSize: 12 }}>Citizem Paris Lyon</Text>
                    <FontAwesome5 name='bookmark' color={'#4eb6aa'} size={21} />
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
                      <FontAwesome5 name='star' color={'grey'} style={{ paddingHorizontal: 1 }} />
                    </View>
                    <View><Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', letterSpacing: .4, }}>267reviews</Text></View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate('Hotel4')}>
              <ImageBackground source={require('./images/hotel4.jpg')} style={styles.img}>

                <View style={{ alignItems: 'flex-end', }}>

                  <Text style={{
                    color: '#fff', fontFamily: 'OpenSans-Bold', fontSize: 22,
                    width: 65, backgroundColor: '#4eb6aa', padding: 5, height: 60, textAlignVertical: 'center', textAlign: 'center',
                    borderBottomLeftRadius: 20,
                  }}>$260
                  </Text>

                </View>
              </ImageBackground>

              <View>
                <View style={{ width: 165, padding: 10,  backgroundColor: '#fff', borderRadius: 20, top: -50, paddingVertical: 15, paddingHorizontal: 15, elevation: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000', fontFamily: 'OpenSans-Bold', fontSize: 12 }}>Ibis  Cambrone</Text>
                    <FontAwesome5 name='bookmark' color={'#4eb6aa'} size={21} />
                  </View>

                  <View style={{ paddingVertical: 2 }}>
                    <Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', }}>Jacobs In Hostel</Text>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                    <View style={{ flexDirection: 'row', }}>

                      <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                      <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                      <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                      <FontAwesome5 name='star' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                      <FontAwesome5 name='star-half-alt' color={'#ffcd3c'} style={{ paddingHorizontal: 1 }} />
                    </View>
                    <View><Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', letterSpacing: .4, }}>365reviews</Text></View>
                  </View>
                </View>
              </View>

            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row' , justifyContent:'space-around' }}>

            <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate('Hotel5')}>
              <ImageBackground source={require('./images/hotel5.jpg')} style={styles.img}>

                <View style={{ alignItems: 'flex-end', }}>

                  <Text style={{
                    color: '#fff', fontFamily: 'OpenSans-Bold', fontSize: 22,
                    width: 65, backgroundColor: '#4eb6aa', padding: 5, height: 60, textAlignVertical: 'center', textAlign: 'center',
                    borderBottomLeftRadius: 20,
                  }}>$300
                  </Text>

                </View>
              </ImageBackground>

              <View>
                <View style={{ width: 165, padding: 10,  backgroundColor: '#fff', borderRadius: 20, top: -50, paddingVertical: 15, paddingHorizontal: 15, elevation: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000', fontFamily: 'OpenSans-Bold', fontSize: 12 }}>Novotal Paris Les</Text>
                    <FontAwesome5 name='bookmark' color={'#4eb6aa'} size={21} />
                  </View>

                  <View style={{ paddingVertical: 2 }}>
                    <Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', }}>Villa Saint - Honore</Text>
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

            <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate('Hotel7')}>
              <ImageBackground source={require('./images/hotel12.jpg')} style={styles.img}>

                <View style={{ alignItems: 'flex-end', }}>

                  <Text style={{
                    color: '#fff', fontFamily: 'OpenSans-Bold', fontSize: 22,
                    width: 65, backgroundColor: '#4eb6aa', padding: 5, height: 60, textAlignVertical: 'center', textAlign: 'center',
                    borderBottomLeftRadius: 20,
                  }}>$300
                  </Text>

                </View>
              </ImageBackground>

              <View>
                <View style={{ width: 165, padding: 10,  backgroundColor: '#fff', borderRadius: 20, top: -50, paddingVertical: 15, paddingHorizontal: 15, elevation: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000', fontFamily: 'OpenSans-Bold', fontSize: 12 }}>Novotal Paris Les</Text>
                    <FontAwesome5 name='bookmark' color={'#4eb6aa'} size={21} />
                  </View>

                  <View style={{ paddingVertical: 2 }}>
                    <Text style={{ color: 'grey', fontSize: 9, fontFamily: 'OpenSans-Bold', }}>Villa Saint - Honore</Text>
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

          <View>
            <Carousel />
          </View>
          
        </View>
        {/* <View>
          <BottomNavigation />
        </View> */}
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  categoryListText: {
    color: 'black',
    paddingHorizontal: 5,
    fontFamily: 'Poppins-SemiBold'
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },


  normalDots: {
    height: 8,
    width: 8,
    borderRadius: 5,
    backgroundColor: 'red'
  },

  img: {
    height: 230,
    width: 165,
    
    borderRadius: 20,
    overflow: 'hidden',
  },
})