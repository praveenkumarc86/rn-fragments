import React from 'react';
import { Alert } from 'react-native';
import {
  Body,
  Container,
  Content,
  Right,
  Text,
  CheckBox,
  List,
  ListItem,
  Fab,
  Icon
} from 'native-base';

class ShoppingList extends React.Component {
  static navigationOptions = {
    title: 'My Groceries List'
  };

  state = {
    products: [{ id: 1, name: 'milk' }, { id: 2, name: 'eggs' }]
  };

  _handleProductPress = product => {
    this.state.products.forEach(p => {
      if (product.id === p.id) {
        p.gotten = !p.gotten;
      }
      return p;
    });

    this.setState({
      products: this.state.products
    });
  };

  _handleAddProductPress = () => {
    this.props.navigation.navigate('AddProduct', {
      addProduct: prodcut => {
        this.setState({ products: this.state.products.concat(prodcut) });
      },
      deleteProduct: prodcut => {
        this.setState({
          products: this.state.products.filter(p => p.id !== prodcut.id)
        });
      },
      productsInList: this.state.products
    });
  };

  _handleClearPress = () => {
    Alert.alert('Clear All Items?', null, [
      { text: 'Cancel' },
      { text: 'Ok', onPress: () => this.setState({ products: [] }) }
    ]);
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.products.map(product => {
              return (
                <ListItem
                  key={product.id}
                  onPress={() => this._handleProductPress(product)}
                >
                  <Body>
                    <Text style={{ color: product.gotten ? '#bbb' : '#000' }}>
                      {product.name}
                    </Text>
                  </Body>
                  <Right>
                    <CheckBox
                      checked={product.gotten}
                      onPress={() => this._handleProductPress(product)}
                    />
                  </Right>
                </ListItem>
              );
            })}
          </List>
        </Content>
        <Fab
          style={{
            backgroundColor: '#5067FF'
          }}
          position="bottomRight"
          onPress={this._handleAddProductPress}
        >
          <Icon name="add" />
        </Fab>
        <Fab
          style={{
            backgroundColor: 'red'
          }}
          position="bottomLeft"
          onPress={this._handleClearPress}
        >
          <Icon ios="ios-remove" android="md-remove" />
        </Fab>
      </Container>
    );
  }
}

export default ShoppingList;
