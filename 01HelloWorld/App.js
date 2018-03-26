// import dependencies
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// import custom component | modularization
import Hello from './Hello';

// class component
// only use class component when
// 1) to access lifecycle methods
// 2) too have access to state
class AppComponent extends Component {
  // in latest versio of react app
  // state can be defined without constructor function
  state = {
    fruitEmojis: ['�', '🍑', '🍇', '🥝']
  };

  render() {
    return (
      <View>
        <Hello name="🙏" />
        <Hello name="⚛️ + 📱" />
      </View>
    );
  }
}

export default AppComponent;
