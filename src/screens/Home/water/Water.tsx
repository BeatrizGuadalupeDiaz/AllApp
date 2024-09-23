import {View, Text, ActivityIndicator, StyleSheet, Image} from 'react-native';
import React from 'react';
import {RootWater} from '../../../types/RespWater';

const API_KEY = '535063458f204933806161527242708';
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';
const city = 'Tuxtla Gutiérrez Chiapas';
const URL_API_WATER = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
  city,
)}&aqi=no`;

export const Water = () => {
  const [water, setWater] = React.useState<RootWater>();
  const [loading, setLoading] = React.useState(true);

  const getInfoWater = async () => {
    try {
      const response = await fetch(URL_API_WATER);
      const json = await response.json();
      setWater(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getInfoWater();
  }, []);

  if (loading) {
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>;
  }
  console.log(water?.forecast?.forecastday[0].date);
  const {name, country, region} = water?.location || {};
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>Clima</Text>
      <Text style={styles.temp}>{name + ','}</Text>
      <Text style={styles.temp}>{region + ' ' + country}</Text>
      <Text style={styles.temp}>{water?.current.temp_c + ' °C'}</Text>
      <Image
        source={{uri: 'https:' + water?.current.condition.icon}}
        style={styles.iconCondition}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  temp: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
  iconCondition: {
    width: 200,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});
