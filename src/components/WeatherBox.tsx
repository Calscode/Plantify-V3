import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";

const WeatherBox = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://plantify-backend-n824.onrender.com/api/currentWeather")
      .then((res) => {
        setWeather(res.data.currentWeather);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Weather API error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.card}>
        <ActivityIndicator size="small" color="#4CAF50" />
        <Text>Loading weather...</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image
          source={{ uri: `https:${weather.condition.icon}` }}
          style={styles.icon}
        />
        <View style={styles.conditionBox}>
          <Text style={styles.conditionText}>{weather.condition.text}</Text>
          <Text style={styles.temp}>{weather.maxtemp_c}°C / {weather.mintemp_c}°C</Text>
        </View>
      </View>
      <Text style={styles.detail}>💧 {weather.daily_chance_of_rain}% chance of rain</Text>
      <Text style={styles.detail}>🌫 Humidity: {weather.avghumidity}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#e0f7e9",
    borderRadius: 10,
    padding: 12,
    width: 150,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  conditionBox: {
    flexShrink: 1,
  },
  conditionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#14532d",
  },
  temp: {
    fontSize: 12,
    color: "#2e7d32",
  },
  detail: {
    fontSize: 12,
    color: "#333",
    marginTop: 2,
  },
});

export default WeatherBox;
