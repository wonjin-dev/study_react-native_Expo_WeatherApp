import * as Location from 'expo-location';
import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";

const { width } = Dimensions.get("window");
const screenWidth = width;

export default function App() {
  const [city, setCity] = useState("Loading . . .")
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const getPermission = async() => {
    const permission = await Location.requestForegroundPermissionsAsync();
    const {grant} = permission.granted;
    if(!grant){
      setOk(false);
    }
    const getLocation = await Location.getCurrentPositionAsync({accuracy: 5})
    const {coords: {latitude, longitude}} = getLocation;
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});
    setCity(location[0].timezone);
  }
  useEffect(() => {
    getPermission();
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    color: 'white',
    fontSize: 58,
    fontWeight: "500",
  },
  day: {
    width: screenWidth,
    alignItems: "center",
  },
  temp: {
    color: 'orange',
    marginTop: 50,
    fontWeight: "400",
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});