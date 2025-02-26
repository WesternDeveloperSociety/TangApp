import React from 'react';
import { StatusBar, View, Dimensions, StyleSheet, } from 'react-native';
import MapView from 'react-native-maps';
import Select from '../../components/ui/select';

export default class HomeScreen extends React.Component {

  // makes screen properly fullscreen for curved phones
  componentDidMount() {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor("transparent");
  }
  
  render() {
    return (
      <View className="flex-1 justify-center items-center">
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 43.004341,
            longitude: -81.276023,
            // effects zoom
            latitudeDelta: 0.0015,
            longitudeDelta: 0.0015,
          }}
        />
        <Select/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
