import styles from './styles'
import React from 'react';
import { Text, View, ListView, TouchableHighlight, AlertIOS, Button, FlatList } from 'react-native';

  class ToDoEdit extends React.Component {
    
    render() {
        const {items}= this.props.screenProps;
        const { navigate } = this.props.navigation;
		return (
        <View>
        {/* <Button
        onPress={() => navigate('Home')}
        title="Go to List"
      /> */}
      		<FlatList data={items} renderItem={({item}) => <Text style={styles.item}>{item.key} </Text>} />
        </View>
        )
    }
  }

  module.exports = ToDoEdit;