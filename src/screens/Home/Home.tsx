import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';

export const Home = () => {
  const URL_API = 'https://pokeapi.co/api/v2/pokemon';

  const [response, setResponse] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(true);

  type Pokemon = {
    name: string;
    url: string;
  };

  useEffect(() => {
    fetch(URL_API)
      .then(res => res.json())
      .then(data => {
        const names = data.results.map((pokemon: Pokemon) => pokemon.name);
        setResponse(names);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <Text style={styles.text}>Api</Text>
        <Text style={styles.text}>Pokemones: </Text>
        {response.map((value, index) => (
          <Pressable
            key={index}
            style={({pressed}) => [
              {backgroundColor: pressed ? '#d3d3d3' : 'white'},
              styles.button,
            ]}>
            <Text style={styles.namePokemon}>{value}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  namePokemon: {
    fontSize: 15,
    color: 'blue',
    textAlign: 'center',
  },
  button: {
    height: 50,
    width: '50%',
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 30,
  },
});
