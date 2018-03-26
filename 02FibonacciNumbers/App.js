import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    numbers: [0, 1]
  };

  componentDidMount() {
    this.interval = setInterval(this.timer, 1000);
  }

  timer = () => {
    const { numbers } = this.state;
    this.setState({
      numbers: [
        ...numbers,
        numbers[numbers.length - 2] + numbers[numbers.length - 1]
      ]
    });
  };

  stopTimer = () => {
    clearInterval(this.interval);
  };

  render() {
    const { numbers } = this.state;

    return (
      <View style={styles.container}>
        <Button onPress={this.stopTimer} title="Stop Timer" color="#841584" />
        <Text style={styles.heading}> Fibonacci Numbers </Text>
        <Text style={styles.subHeading}>
          {' '}
          Sum: {numbers.reduce((sum, elem) => sum + elem)}
        </Text>
        <Text style={styles.subHeading}> Elements: {numbers.length} </Text>
        <Text style={styles.body}>
          {numbers.map((num, index) => {
            return <Text key={index}> {num} </Text>;
          })}
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
    paddingTop: 100
    // justifyContent: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: '400'
  },
  subHeading: {
    fontSize: 24,
    fontWeight: '400'
  },
  body: {
    fontSize: 18
  }
});
