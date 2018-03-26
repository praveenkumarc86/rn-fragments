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
    greetEmojis: [],
    fruitEmojis: ['🍅', '🍑', '🍇', '🥝']
  };

  // using lifecycle method
  componentDidMount() {
    // modify state
    this.setState({
      greetEmojis: '⚛️ + 📱'
    });
  }

  render() {
    return (
      <View>
        {/* access state in render */}
        <Hello name={this.state.greetEmojis} />
      </View>
    );
  }
}

export default AppComponent;
