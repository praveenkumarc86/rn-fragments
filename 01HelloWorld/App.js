// import dependencies
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// functional child component
const Hello = props => (
  <Text style={{ paddingTop: 50 }}>Hello, {props.name}</Text>
);

// class component
// only use class component when
// 1) to access lifecycle methods
// 2) too have access to state
class AppComponent extends Component {
  render() {
    return (
      <View>
        <Hello name="React Native" />
        <Hello name="World" />
      </View>
    );
  }
}

export default AppComponent;
