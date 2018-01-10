/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import MainContainer from "./app/components/Main/index";
 

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<{}> {
  render() {
    return (
      <MainContainer />
    );
  }
}




// const HomeScreen = ({ navigation }) => (
//   <ToDoListContainer />
// );
// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     return <ToDoListContainer navigation={this.props.navigation}/>;
//   }
// }

// const DetailsScreen = () => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Details Screen</Text>
//   </View>
// );

// const RootNavigator = StackNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       headerTitle: 'Tasks List',
//     },
//   },
//   Details: {
//     screen: DetailsScreen,
//     navigationOptions: {
//       headerTitle: 'Details',
//     },
//   },
// });



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
