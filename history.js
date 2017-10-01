import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  FlatList,
  Text,
  View,
} from 'react-native';

export class History extends Component {
  static navigationOptions = {
    title: 'History'
  }

  constructor(props) {
    super(props)
    this.state = {}
    this._loadEntries()
  }

  render() {
    const { navigate } = this.props.navigation
    return(
      <View>
        <Button
          title='Enter log entry'
          onPress={() => navigate('LogEntry')}
        />

        <FlatList
          data={this.state.data}
          extraData={this.state}
          renderItem={(entry) => this._renderItem(entry)}
          ListHeaderComponent={this._renderHeader}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }

  async _loadEntries() {
    try {
      let keys = await AsyncStorage.getAllKeys()
      let stores = await AsyncStorage.multiGet(keys)
      let lines = stores.map((result, i, store) => {
        return store[i][1]
      })
      this.setState({data: lines})
    } catch(error) {
      console.error(error)
    }
  }

  _keyExtractor(item, index) {
    return item.split(',')[3]
  }

  _renderHeader() {
    return(
      <View style={{flex: 4, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text>Date</Text>
      <Text>Volume</Text>
      <Text>Price</Text>
      <Text>Odometer</Text>
      </View>
    )
  }

  _renderItem(entry) {
    if (entry === null) {
      return(<ActivityIndicator />)
    }
    let [date, volume, price, odometer, isFilled] = entry.item.split(',')
    return(
      <View style={{flex: 4, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text>{date}</Text>
      <Text>{volume}</Text>
      <Text>{price}</Text>
      <Text>{odometer}</Text>
      </View>
    )
  }

}
