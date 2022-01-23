import * as Location from 'expo-location';
import React, {useState, useEffect} from "react";
import {View, Text, Dimensions, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
import {Fontisto} from "@expo/vector-icons";
const {width} = Dimensions.get("window");
const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lightning",
};
const screenWidth = width;
const API_KEY = "784ab24ff2ed5d94d4288abed9e25d13";

export default function App() {
  const [city, setCity] = useState("Loading . . .");
  const [days, setDays] = useState([]);
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
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
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
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator
              color="white"
              style={{marginTop: 10}}
              size="large"
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}
                </Text>
                <Fontisto
                  name={icons[day.weather[0].main]}
                  size={68}
                  color="white"
                />
              </View>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
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
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  temp: {
    color: 'orange',
    marginTop: 50,
    fontWeight: "400",
    fontSize: 178,
  },
  description: {
    marginTop: -10,
    fontSize: 30,
    color: "white",
    fontWeight: "500",
  },
  tinyText: {
    marginTop: -5,
    fontSize: 25,
    color: "white",
    fontWeight: "500",
  }
});