import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    numbers: [0, 1]
  };

  componentDidMount() {
    setInterval(this.timer, 1000);
  }

  timer = () => {};

  render() {
    const { numbers } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Fibonacci Numbers</Text>
        <Text style={styles.body}>
          {numbers.map((num, index) => {
            return <Text key={index}>{num}</Text>;
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
  body: {
    fontSize: 18
  }
});
