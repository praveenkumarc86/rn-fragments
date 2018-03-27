import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>StopWatch</Text>
        <Text style={styles.appTitle}>StopWatch</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center'
  },
  appTitle: {
    fontSize: 24,
    fontWeight: '300',
    paddingTop: 50
  }
});
