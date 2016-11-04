import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class MainApp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Stateful />
  }
}

class Stateful extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number_clicked: 1,
      text: 'Click me'
    }
  }

  render() {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hallo Stateful!</Text>
      <TouchableOpacity onPress={() => this.handleClick()}>
        <Text>{`${this.state.text} ${this.state.number_clicked}`}</Text>
      </TouchableOpacity>
    </View>
  }

  handleClick() {
    this.setState({number_clicked: this.state.number_clicked + 1})
  }
}
