import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = {
    defaultColor: '#bbb'
  };

  _handleBackgroundCHange = () => {
    let ColorCode =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    this.setState({
      defaultColor: ColorCode
    });
  };
  render() {
    return (
      <View
        style={[styles.container, { backgroundColor: this.state.defaultColor }]}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={this._handleBackgroundCHange}
        >
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
