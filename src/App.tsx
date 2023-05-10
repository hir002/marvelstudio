import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Movie from './Movie';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Movie />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
export default App;
