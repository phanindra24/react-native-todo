import styles from './styles'
import React from 'react';
import { Text, View, ListView, TouchableHighlight, AlertIOS, Button, FlatList } from 'react-native';
import {
    StackNavigator,
  } from 'react-navigation'; 


class ToDoList extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {items}= this.props.screenProps;
      const { navigate } = this.props.navigation;
      return ( 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List of Items</Text>
      <FlatList data={items} renderItem={({item}) => <Text style={styles.item}>{item.key} </Text>} />
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

