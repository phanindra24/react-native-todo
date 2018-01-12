// import styles from './styles'
// import React from 'react';
// import { Text, TouchableOpacity, View ,} from 'react-native';
// import DateTimePicker from 'react-native-modal-datetime-picker';
//
//
//
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PanResponder,
  TextInput,
  Button,
} from 'react-native';
import DatePicker from './datepicker.js';
// import {
//     StackNavigator,
//   } from 'react-navigation';


class ToDoEdit extends Component {

  // constructor(props) {
    // super(props);

    state = {

      date: '',
      time: '20:00',
      todoName:'',

      datetime: '2016-05-05 20:00',
      datetime1: '2016-05-05 20:00',
      todoDescription:'',
    };
  // }

  // componentWillMount() {
  //   this._panResponder = PanResponder.create({
  //     onStartShouldSetPanResponder: (e) => {console.log('onStartShouldSetPanResponder'); return true;},
  //     onMoveShouldSetPanResponder: (e) => {console.log('onMoveShouldSetPanResponder'); return true;},
  //     onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
  //     onPanResponderMove: (e) => console.log('onPanResponderMove'),
  //     onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
  //     onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
  //   });
  // }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View >
        <Text >
          TODO Details
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Todo Name"

          onChangeText={(todoName) => this.setState({todoName})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Todo Description"
          onChangeText={(todoDescription) => this.setState({todoDescription})}
        />


        <DatePicker
          style={{width: 200}}
          date={this.state.datetime1}
          mode="datetime"
          format="YYYY-MM-DD HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          minuteInterval={10}
          onDateChange={(datetime) => {this.setState({datetime1: datetime});}}
        />
        <Button
          onPress={() => navigate('Home')}
          title="Add Todo"
        />
        </View>


        // <Text >datetime: {this.state.datetime1}</Text>
    );
  }
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5
//   }
// });

// AppRegistry.registerComponent('datepicker', () => datepicker);
  module.exports = ToDoEdit;
