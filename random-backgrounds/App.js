import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

export default class App extends React.Component {
  state = {
    firstValue: '#fff',
    lastValue: '#000'
  };

  _handleBackgroundCHange = () => {
    // let ColorCode =
    //   'rgb(' +
    //   Math.floor(Math.random() * 256) +
    //   ',' +
    //   Math.floor(Math.random() * 256) +
    //   ',' +
    //   Math.floor(Math.random() * 256) +
    //   ')';

    // this.setState({
    //   defaultColor: ColorCode
    // });

    let x =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    let y =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    this.setState({
      firstValue: x,
      lastValue: y
    });
  };
  render() {
    return (
      <LinearGradient
        colors={[this.state.firstValue, this.state.lastValue]}
        style={[styles.container]}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={this._handleBackgroundCHange}
        >
          <Text style={styles.buttonText}>Click Here</Text>
        </TouchableOpacity>
      </LinearGradient>
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
