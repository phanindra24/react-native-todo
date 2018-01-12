import styles from './styles'
import React from 'react';
import { Text, TouchableOpacity, View ,} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

  class ToDoEdit extends React.Component {

    state = {
    isDateTimePickerVisible: false,
    // isTimePickerVisible : false,
    selectedDate:null,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  // _showTimePicker = () => this.setState ({isTimePickerVisible:true});
  // _hideTimePicker = () => this.setState ({isTimePickerVisible:false});


  _handleDatePicked = (date) => {
    this.setState({ selectedDate: date });
    this._hideDateTimePicker();
  };
  // _handleTimePicked = (time) => {
  //   this.setState({selectedTime : time});
  //   this._hideTimePicker();
  // }

  render () {
    selectedDate = this.state.selectedDate;
    // selectedTime=this.state.selectedTime;
    date_ = selectedDate!=null ? selectedDate.toString() : 'select date';
    // time_= selectedTime!=null ? selectedTime.toString() : 'select date';
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>{date_}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        </View>

      // <View >
      // <TouchableOpacity onPress={this._showTimePicker}>
      //   <Text>{time_}</Text>
      // </TouchableOpacity>
      //
      //    <TimePicker
      //    selectedHour={0}
      //    selectedMinute={30}
      //    minuteInterval={5}
      //    isVisible={this.state.isTimePickerVisible}
      //    onConfirm={this._handleTimePicked}
      //    onCancel={this._hideTimePicker} />
      //  </View>

     );
   }
 };



  module.exports = ToDoEdit;
