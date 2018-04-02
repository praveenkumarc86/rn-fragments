import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Forecast extends Component {
  rendeR() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>{this.props.main}</Text>
        <Text style={styles.mainText}>
          Current conditions: {this.props.description}
        </Text>
        <Text style={styles.bigText}>{this.props.temp} °F</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { height: 130 },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  mainText: { flex: 1, fontSize: 16, textAlign: 'center', color: '#ffffff' }
});