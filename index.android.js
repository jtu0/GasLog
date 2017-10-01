import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LogEntry } from './log_entry';
import { History } from './history';

const GasLog = StackNavigator({
  LogEntry: { screen: LogEntry },
  History: { screen: History },
})

AppRegistry.registerComponent('GasLog', () => GasLog);
