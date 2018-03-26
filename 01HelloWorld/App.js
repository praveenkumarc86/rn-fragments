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
    greetEmojis: ['⚛️ + 📱'],
    fruitEmojis: ['🍅', '🍑']
  };

  // using lifecycle method
  componentDidMount() {
    // modify state
    this.setState(prevState => ({
      greetEmojis: [...prevState.greetEmojis, ' + 👨‍💻']
    }));
    this.setState({
      fruitEmojis: [...this.state.fruitEmojis, '🍇 🥝']
    });
  }

  render() {
    const { fruitEmojis, greetEmojis } = this.state;

    return (
      <View style={{ alignItems: 'center' }}>
        {/* access state in render */}
        <Hello name={greetEmojis} />
        <Text style={{ paddingTop: 50 }}>Fruits Array:</Text>
        {fruitEmojis.length > 0 ? (
          fruitEmojis.map(fruit => {
            return <Text key={fruit}>{fruit}</Text>;
          })
        ) : (
          <Text>There are no fruits in your array</Text>
        )}
      </View>
    );
  }
}

export default AppComponent;
