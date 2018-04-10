import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = {
    defaultColor: '#bbb'
  };
  render() {
    return (
      <View
        style={[styles.container, { backgroundColor: this.state.defaultColor }]}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Click Here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#00bbbb'
  },
  buttonText: {
    fontSize: 18
  }
});
