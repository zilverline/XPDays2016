/* @flow */

'use strict';

import React, { Component } from 'react';
import {
  ListView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './styles';
import Config from './Config';

var KLUSSEN = [
  {title: 'Lijm van trap verwijderen', deadline: '4 juli'},
  {title: 'Schroeven en pluggen uit de muren halen', deadline: '4 juli'},
  {title: 'Laminaat verwijderen', deadline: '18 juli'}
];

export default class ToDo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    let response = await fetch(`${Config.current().url}/todo_items`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      let list = await response.json();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(list),
        loaded: true,
      });
    }
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>To do list</Text>
          <View>
            <TextInput
              placeholder={"Item title"}
              style={styles.input}
              onChangeText={(newJob) => this.setState({newJob})}
              value={this.state.newJob}
            />
            <TextInput
              placeholder={"Deadline"}
              style={styles.input}
              onChangeText={(newDeadline) => this.setState({newDeadline})}
              value={this.state.newDeadline}
            />
            {this.renderButton()}
          </View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderJob}
            style={styles.listView}
          />
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
           Loading todo items...
        </Text>
      </View>
    );
  }

  renderJob(job) {
    return (
      <View>
        <Text style={styles.item}>{job.title}</Text>
        <Text style={styles.deadline}>{job.due_date}</Text>
      </View>
    );
  }

  renderButton() {
    return (
      <TouchableOpacity onPress={this.addJob} style={[styles.button, {alignSelf: 'center'}]}>
        <Text style={[styles.defaultButtonText]}>Add item</Text>
      </TouchableOpacity>
    );
  }
}
