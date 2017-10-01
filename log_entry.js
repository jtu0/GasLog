import React, { Component } from 'react';
import { Button,
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
      date: '',
      odometer: '',
      volume: '',
      price: '',
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Text>Date</Text>
        <DatePicker
          date={this.state.date}
          onDateChange={(date) => {this.setState({date: date})}}

        />


        <Text>Odometer</Text>
        <TextInput
          value={this.state.odometer}
          keyboardType='numeric'
          onChange={(odometer) => {this.setState({odometer: odometer})}}
        />

        <Text>Volume (gal)</Text>
        <TextInput
          value={this.state.volume}
          keyboardType='numeric'
          onChange={(volume) => {this.setState({volume: volume})}}
        />

        <Text>Price ($/gal)</Text>
        <TextInput
          value={this.state.price}
          keyboardType='numeric'
          onChange={(price) => {this.setState({price: price})}}
        />

        <Button
          title='Save log entry'
          onPress={() => {
            console.log('xxxx FAKING IT xxxxx saving log entry to AsyncStorage');
            navigate('History')
          }}
        />
      </View>
    )
  }
}
