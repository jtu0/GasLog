import React, { Component } from 'react';
import {
  AsyncStorage,
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import DatePicker from 'react-native-datepicker'

export class LogEntry extends Component {
  static navigationOptions = {
    title: 'Log Entry'
  }

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Text>Date</Text>
        <DatePicker
          date={this.state.date}
          onDateChange={(date) => {
            this.setState({date: date})
          }}
        />


        <Text>Odometer</Text>
        <TextInput
          value={this.state.odometer}
          keyboardType='numeric'
          onChangeText={(odometer) => {this.setState({odometer: odometer})}}
        />

        <Text>Volume (gal)</Text>
        <TextInput
          value={this.state.volume}
          keyboardType='numeric'
          onChangeText={(volume) => {this.setState({volume: volume})}}
        />

        <Text>Price ($/gal)</Text>
        <TextInput
          value={this.state.price}
          keyboardType='numeric'
          onChangeText={(price) => {this.setState({price: price})}}
        />

        <Button
          title='Save log entry'
          onPress={() => {
            this._saveData()
            navigate('History')
          }}
        />
      </View>
    )
  }

  _formattedDate() {
    let date = this.state.date
    if (typeof date == 'string') { return date }

    let day = date.getDate()
    if (day < 10) { day = '0'+day }
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    return [month, day, year].join('/')
  }

  _saveData() {
    key = this.state.odometer
    value = [
      this._formattedDate(),
      this.state.volume,
      this.state.price,
      this.state.odometer,
      'F'
    ].join(',')
    AsyncStorage.setItem(key, value)
  }
}
