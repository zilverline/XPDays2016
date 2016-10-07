/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class FlexboxDemo extends Component {
  
  render() {
    return (
      // Try setting `flexDirection` to `column` vs `row`.
      // Try setting `justifyContent` to `center` vs `space-between`.
      // Try setting `alignItems` to 'flex-start' vs `center`.
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems: 'flex-start'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
