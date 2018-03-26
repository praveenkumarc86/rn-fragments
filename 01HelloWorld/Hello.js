// import dependencies
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// functional child component
const Hello = props => (
  <Text style={{ paddingTop: 50 }}>Hello, {props.name}</Text>
);

export default Hello;
