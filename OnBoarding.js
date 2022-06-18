import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const slides = [
  {
    id: '1',
    image: require('./images/1.png'),
    title: 'Life is Journey',
    subtitle: 'A Journey of a thousand miles begin with ',
    subtitle2: 'single step.',
  },
  {
    id: '2',
    image: require('./images/2.png'),
    title: 'Journey is Home',
    subtitle: 'Once a year go someplace never been ',
    subtitle2: 'before.',
  },
  {
    id: '3',
    image: require('./images/3.png'),
    title: 'Travel to live',
    subtitle: 'Travel is the only thing you buy that',
    subtitle2: 'makes you richer.',
  },
]

const Slide = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={{ height: '55%', width, resizeMode: 'contain', marginVertical: 40, }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Text style={styles.subtitle2}>{item.subtitle2}</Text>
    </View>
  )
}

const NewSlide = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);

  const Footer = () => {
    return (

      <View style={{ height: height * 0.17,flexDirection:'row', alignItems:'center',  justifyContent:'space-between',  }}>
        
        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>{slides.map((_, index) => (
          <Text key={index} style={[styles.indicator, currentSlideIndex == index && { backgroundColor: '#4eb6aa',  },]} />))}
        </View>
         
        <View style={{  }}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.replace('Home')}>
            <Text style={{ color: '#fff', fontFamily: 'Poppins-SemiBold' }}>Get Started </Text><FontAwesome5 name='angle-right' style={styles.icon} />
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
    const updateCurrentSlideIndex = e => {
      const contentOffsetX = e.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(contentOffsetX / width);
      setCurrentSlideIndex(currentIndex);
  };

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'#e5e5e5'} />
      <FlatList ref={ref}  onMomentumScrollEnd={updateCurrentSlideIndex} showsHorizontalScrollIndicator={false} pagingEnabled horizontal contentContainerStyle={{ height: height * 0.80 }} data={slides} renderItem={({ item }) => <Slide item={item} />} />
      <Footer />
    </SafeAreaView>
  )
}

export default NewSlide

const styles = StyleSheet.create({
  title: {
    marginTop:20,
    color: '#000',
    letterSpacing: 1,
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold'
  },

  subtitle: {
    color: 'grey',
    lineHeight: 23,
    letterSpacing: .9,
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center',
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    fontFamily: 'Poppins-SemiBold',
  },

  subtitle2: {
    color: 'grey',
    lineHeight: 23,
    letterSpacing: .9,
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
    width: '100%',
    fontFamily: 'Poppins-SemiBold',
  },

  btn: {
    color: '#fff',
    backgroundColor: '#4eb6aa',
    height: 60,
    paddingHorizontal:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  
  indicator: {
    height: 10,
    width: 10,
    borderRadius:20,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 50,
    left:20,
},

  icon: {
    color: '#fff',
    fontSize: 18,
    position: 'relative',
    top: -1,
    left: 3,
  },
})