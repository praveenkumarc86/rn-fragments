// import dependencies
import React from 'react';
import { View, Text } from 'react-native';

// functional child component
const Hello = props => (
  <Text style={{ paddingTop: 50 }}>Hello, {props.name}</Text>
);

// functional parent component
const AppComponent = () => {
  return (
    <View>
      <Hello name="React Native" />
      <Hello name="World" />
    </View>
  );
};

export default AppComponent;
