import styles from './styles'
import React from 'react';
import { Text, View, ListView, TouchableHighlight, AlertIOS, Button } from 'react-native';

  class ToDoEdit extends React.Component {
    
    render() {
        const {items}= this.props.screenProps;
        const { navigate } = this.props.navigation;
		return (
        <View>
        <Button
        onPress={() => navigate('Home')}
        title="Go to List"
      />
      		<Text>{items}</Text>
        </View>
        )
    }
  }

  module.exports = ToDoEdit;