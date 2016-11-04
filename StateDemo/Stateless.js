import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class MainApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number_clicked: 1,
      text: 'Click me'
    }
  }

  render() {
    return <Stateless {...this.state} rerender={(props) => this.setState(props)} />
  }
}

const Stateless = (props) => {
  return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Hallo Stateless!</Text>
    <TouchableOpacity onPress={() => handleClick(props)}>
      <Text>{`${props.text} ${props.number_clicked}`}</Text>
    </TouchableOpacity>
  </View>
}

const handleClick = (props) => {
  props.rerender({number_clicked: props.number_clicked + 1})
}
