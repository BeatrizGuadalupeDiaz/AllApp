import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';

type Movies = {
  id: string;
  releaseYear: string;
  title: string;
};

export const Movies = () => {
  const URL_API_MOVIES = 'https://reactnative.dev/movies.json';

  const [data, setData] = React.useState<Movies[]>([]);
  const [loading, setLoading] = React.useState(true);

  const getMoview = async () => {
    try {
      const response = await fetch(URL_API_MOVIES);
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoview();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Api</Text>
      <Text style={styles.text}>Movies: </Text>
      <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <Text style={styles.namePokemon} key={item.id}>
            {item.title} - {item.releaseYear}
          </Text>
        )}
      />
    </View>
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
