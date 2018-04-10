// setting up our navigation

import React from 'react';
import {
  StackNavigator
} from 'react-navigation';
import ShoppingList from './src/screens/ShoppingList';
import AddProduct from './src/screens/AddProduct';

const Navigator = StackNavigator({
  ShoppingList: {
    screen: ShoppingList
  },
  AddProduct: {
    screen: AddProduct
  }
});

export default class App extends React.Component {
  render() {
    return <Navigator / > ;
  }
}