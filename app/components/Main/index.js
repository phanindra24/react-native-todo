import styles from './styles'
import React from 'react';
import { Text, View, ListView, TouchableHighlight, AlertIOS, Button } from 'react-native';
import {
    StackNavigator,
  } from 'react-navigation';
import ToDoListContainer from "../ToDoListContainer/index"



class MainContainer extends React.Component {
    

    render() {
        return <ToDoListContainer />
    }
}


module.exports = MainContainer;


