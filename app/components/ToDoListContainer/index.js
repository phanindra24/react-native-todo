import styles from './styles'
import ToDoList from '../ToDoList/index';
// import ToDoEdit from '../ToDoEdit/index';
import React from 'react';
import { Text, View, ListView, TouchableHighlight, AlertIOS, Button } from 'react-native';
import {
    StackNavigator,
  } from 'react-navigation'; 
  
  
  const ToDoEdit = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
  
  const ToDoRootNavigator = StackNavigator({
    Home: {
      screen: ToDoList,
      navigationOptions: {
        headerTitle: 'Tasks List',
      },
    },
    Details: {
      screen: ToDoEdit,
      navigationOptions: {
        headerTitle: 'Details',
      },
    },
  });
  

class ToDoContainer extends React.Component {
    

    render() {
        return <ToDoRootNavigator />
    }
}

module.exports = ToDoContainer;

    // constructor() {
    //     super();
    //     this.state = {
    //         items: [
    //             {txt: 'Learn react native', complete: false},
    //             {txt: 'Make a to-do app', complete: true}
    //         ]
    //     };
    //     this.alertMenu = this.alertMenu.bind(this);
    //     this.deleteItem = this.deleteItem.bind(this);
    //     this.updateItem = this.updateItem.bind(this);
    //     this.openItem = this.openItem.bind(this);

    // }

    // alertMenu(key) {
    //     AlertIOS.alert(
    //         'Quick Menu',
    //         null,
    //         [
    //             {text: 'Delete', onPress: () => this.deleteItem(rowID)},
    //             {text: 'Edit', onPress: () => this.openItem(rowData, rowID)},
    //             {text: 'Cancel'}
    //         ]
    //     )
    // }
    // alertMenu(rowData, rowID) {
    //     AlertIOS.alert(
    //         'Quick Menu',
    //         null,
    //         [
    //             {text: 'Delete', onPress: () => this.deleteItem(rowID)},
    //             {text: 'Edit', onPress: () => this.openItem(rowData, rowID)},
    //             {text: 'Cancel'}
    //         ]
    //     )
    // }

    // deleteItem(index) {
    //     var items = this.state.items;
    //     items.splice(index, 1);
    //     this.setState({items: items})
    // }

    // updateItem(item, index) {
    //     var items = this.state.items;
    //     if (index) {
    //         items[index] = item;
    //     }
    //     else {
    //         items.push(item)
    //     }
    //     this.setState({items: items});
    //     this.props.navigator.pop();
    // }

    // openItem(rowData, rowID) {
    //     this.props.navigator.push({
    //         title: rowData && rowData.txt || 'New Item',
    //         component: ToDoEdit,
    //         passProps: {item: rowData, id: rowID, update: this.updateItem}
    //     });
    // }


// const { navigate } = this.props.navigation;
        
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text>Home Screen</Text>
        //     <Button
        //       onPress={() => navigate('Details')}
        //       title="Go to details"
        //     />
        //   </View>
    //         <View >
    //     <Text >
    //       Welcome to React Native!
    //     </Text>
    //     <Text >
    //       To get started, edit App.js
    //     </Text>
    //     <Text >
    //       {/* {instructions} */}
    //     </Text>
    //   </View>
            // <View style={{flex:1}}>
            //     <ToDoList
            //         items={this.state.items}
            //         onPressItem={this.openItem}
            //         onLongPressItem={this.alertMenu}/>
            //     <TouchableHighlight
            //         style={[styles.button, styles.newButton]}
            //         underlayColor='#99d9f4'
            //         onPress={this.openItem}>
            //         <Text style={styles.buttonText}>+</Text>
            //     </TouchableHighlight>
            // </View>
        
