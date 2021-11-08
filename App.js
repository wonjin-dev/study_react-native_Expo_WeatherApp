import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  city: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  weather: {
    flex: 3
  },
  day: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 50
  },
  cityName: {
    color: 'white',
    fontSize: 38,
    fontWeight: '500'
  },
  temp: {
    color: 'orange',
    fontSize: 158
  }
});