import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./images/hotel1.jpg'),
        require('./images/hotel2.jpg'),
        require('./images/hotel3.jpg'),
        require('./images/hotel4.jpg'),
        require('./images/hotel5.jpg'),
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{marginLeft:20 , fontSize:20 , fontFamily:'OpenSans-Bold' , color:'#000' , paddingBottom:10,}}>we have some samples</Text>
        </View>
        <SliderBox
          
          images={this.state.images}
          sliderBoxHeight={150}
          sliderBoxWidth={150}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="#4eb6aa"
          inactiveDotColor="#deeeed"
          paginationBoxVerticalPadding={20}
          
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}

          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)"
          }}
          ImageComponentStyle={{ borderRadius: 20, width: '87%', marginTop: 5 ,marginBottom:40, }}
          imageLoadingColor="#2196F3"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:40,
  },
});