import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Forecast from './components/Forecast';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      forecast: null
    };
  }

  // by using fat-arrow makes sure that the callback is bound to component instance (i.e. this)
  _handleTextChange = event => {
    this.setState({
      zip: event.nativeEvent.text
    });
  };

  render() {
    let content = null;
    if (this.state.forcast !== null) {
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>You Input {this.state.zip}</Text>
        {content}
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handleTextChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    justifyContent: 'center'
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: 'center'
  }
});
