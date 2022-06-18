import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import MapView, { PROVIDER_GOOGLE, region, Marker, initialRegion } from 'react-native-maps'
/* import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAP_APIKEY = 'AIzaSyBE-R6iVrBjpmBhjYq_mq7423ZYfe9lo8s'; */

const Map = () => {
  /* const [state, setState] = useState({
    pickupCords: {
      latitude: 22.258,
                longitude: 71.19,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },

    droplocationCords: {
      latitude: 22.258,
                longitude: 71.19,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }) */

  /* const { pickupCords, droplocationCords } = state */

  return (
    <View>
      <MapView provider={PROVIDER_GOOGLE}
        zoomEnabled={true}
        /* initialRegion={region} */
        showsUserLocation={true}
        style={{ height: '100%' }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* <MapViewDirections
          origin={pickupCords}
          destination={droplocationCords}
          apikey={GOOGLE_MAP_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
        /> */}
        <Marker description='Delivery person' coordinate={{
                latitude: 22.258,
                longitude: 71.19,
              }}/>
      </MapView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})