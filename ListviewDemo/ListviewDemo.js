import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ListviewDemo extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.header, {alignSelf: 'center'}]}>Hello XP days</Text>
      </View>
    );
  }

  renderList() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={styles.listItem}>{rowData}</Text>}
        renderHeader={() => <Text style={styles.header}>Months in a year</Text>}
        renderSeparator={(sectionID, rowID) => <View key={rowID} style={styles.separator}/>}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    backgroundColor: 'yellowgreen',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  separator: {
    borderColor: 'black',
    borderBottomWidth: 1
  }
});
