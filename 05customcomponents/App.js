import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Strong, Em } from './components/FormatStyles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Open up <Strong>App.js</Strong> to <Em>start working </Em>on your app!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40
  }
});
