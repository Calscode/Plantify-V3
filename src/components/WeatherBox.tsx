import axios from 'axios';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

function WeatherBox() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://plantify-backend-n824.onrender.com/api/currentWeather')
    .then((res) => {
        setWeather(res.data.weather)
    });
  });
}
