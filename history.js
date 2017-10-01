import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

export class History extends Component {
  static navigationOptions = {
    title: 'History'
  }

  render() {
    const { navigate } = this.props.navigation
    return(
      <View>
        <Text>(logs here)</Text>
        <Button
          title='Enter log entry'
          onPress={() => navigate('LogEntry')}
        />
      </View>
    )
  }
}
