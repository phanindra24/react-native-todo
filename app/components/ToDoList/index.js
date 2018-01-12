import styles from './styles'
import React from 'react';
import { Text, View, ListView, TouchableHighlight, AlertIOS, Button } from 'react-native';
import {
    StackNavigator,
  } from 'react-navigation'; 


class ToDoList extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
      return ( 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigate('Details')}
        title="Go to  all details"
      />
      <TouchableHighlight
                    style={[styles.button, styles.newButton]}
                    underlayColor='#99d9f4'
                    onPress={() => navigate('Details')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableHighlight>
      </View>);
    }
  }

  module.exports = ToDoList;

