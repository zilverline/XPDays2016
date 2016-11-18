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
      <View style={styles.container}>
        <Text style={[styles.header, {alignSelf: 'center' }]}>
          Hello XP Days !!
        </Text>
        // Try setting `flexDirection` to `column` vs `row`.
        // Try setting `justifyContent` to `center` vs `space-between`.
        // Try setting `alignItems` to 'flex-start' vs `center`.
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent:'space-between',
          alignItems: 'flex-start'
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
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
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
