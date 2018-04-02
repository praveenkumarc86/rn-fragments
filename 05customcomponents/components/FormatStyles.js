import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  strong: {
    fontWeight: 'bold'
  },
  em: {
    fontStyle: 'italic'
  }
});

export class Strong extends Component {
  render() {
    return <Text style={styles.strong}>{this.props.children}</Text>;
  }
}

export class Em extends Component {
  render() {
    return <Text style={styles.em}>{this.props.children}</Text>;
  }
}
