import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  Dimensions
} from 'react-native';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';

const { heigh, width } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}> Get Shit Done! </Text>{' '}
        </View>{' '}
        <View style={styles.welcomeContainer}>
          <Text style={styles.bigWelcomeMessage}>
            Hello, How are you today ?
          </Text>{' '}
        </View>{' '}
        <View style={styles.tasksleftContainer}>
          <Text style={styles.tasksleftText}>You have 3 tasks left today!</Text>
        </View>
        <View style={styles.todayContainer}>
          <Text style={styles.todayText}>
            {moment().format('dddd, MMMM Do YYYY')}
          </Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="ios-add-circle-outline" size={72} color="#ff6f5d" />
          <Text style={styles.cardText}>Add Categories</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6f5d'
  },
  titleContainer: {
    marginTop: 50,
    alignItems: 'center'
  },
  titleText: {
    fontSize: 20,
    color: '#f1f1f1'
  },
  welcomeContainer: {
    marginLeft: 35,
    marginTop: 35
  },
  bigWelcomeMessage: {
    fontSize: 32,
    color: '#fff'
  },
  tasksleftContainer: {
    marginLeft: 35,
    marginTop: 10
  },
  tasksleftText: {
    fontSize: 18,
    color: '#ebebeb'
  },
  todayContainer: {
    marginLeft: 35,
    marginTop: 50
  },
  todayText: {
    fontSize: 18,
    color: '#fff'
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 35,
    marginBottom: 55,
    borderBottomWidth: 0,
    borderRadius: 10,

    ...Platform.select({
      ios: {
        shadowColor: 'rgb(60,60,60)',
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: {
          height: 2,
          width: 0
        }
      },
      android: {
        elevation: 5
      }
    })
  },
  cardText: {
    fontSize: 32,
    color: '#A9A9A9'
  }
});
