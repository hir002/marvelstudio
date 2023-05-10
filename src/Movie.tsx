import React, { useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { } from 'react-test-renderer';

const apiUrl = 'https://api.tvmaze.com/search/shows?q=';

const Movie = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const scrollRef = useRef<ScrollView>(null);
  const onGetData = async () => {
    const response = await fetch(apiUrl + value, { method: 'GET' });
    const result = await response.json();
    console.log(result[0]);
    setMovies(result);
  };
  const onChangeText = (text: string) => {
    setValue(text);
  };
  const clear = () => {
    setValue('');
    setMovies([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.moviestext}> MOViES</Text>
      <TextInput
        style={styles.textinput}
        value={value}
        placeholder=" search for your movie..."
        placeholderTextColor="green"
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onGetData}>
        <Text style={styles.text}>Click </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clear()}>
        <Image style={styles.delete} source={require('./delete.png')} />
      </TouchableOpacity>
      <View style={styles.title1}>
        <TouchableOpacity onPress={() => scrollRef.current?.scrollToEnd()}>
          <Image style={styles.down} source={require('./down.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollRef.current?.scrollTo({ y: 0 })}>
          <Image style={styles.up} source={require('./up.png')} />
        </TouchableOpacity>
      </View>

      <ScrollView ref={scrollRef}>
        {movies?.map((item, index) => (
          <View key={index}>
            <Image
              style={styles.image2}
              source={{ uri: item.show.image?.medium }}
            />
            <Text style={styles.film}>{item.show.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  moviestext: {
    fontSize: 42,
    color: 'green',
    fontWeight: '600',
    height: 200,
    alignSelf: 'center',
  },
  title1: {
    zIndex: 1,
    alignItems: 'flex-end',
  },
  textinput: {
    width: 390,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: -90,
    fontWeight: '700',
    fontSize: 20,
  },

  text: {
    fontSize: 30,
    color: 'blue',
    alignSelf: 'center',
    fontWeight: '700',
  },
  film: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  image2: {
    width: 320,
    height: 430,
  },
  delete: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    top: -90,
  },
  down: {
    width: 50,
    height: 50,
  },
  up: {
    width: 50,
    height: 50,
  },
});

export default Movie;
