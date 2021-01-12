import 'react-native-gesture-handler';

import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Header from './components/Header';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#da5c5c" />
      <View style={styles.container}>
        <Header />
        <Home />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
