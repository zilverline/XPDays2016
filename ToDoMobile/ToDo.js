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

const tenant_id = 1;

export default class ToDo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      job: "",
      deadline: "",
      id: ""
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>To Do list</Text>
          <View>
            <TextInput
              placeholder={"Item title"}
              style={styles.input}
              onChangeText={(job) => this.setState({job})}
              value={this.state.job}
            />
            <TextInput
              placeholder={"Deadline"}
              style={styles.input}
              onChangeText={(deadline) => this.setState({deadline})}
              value={this.state.deadline}
            />
            {this.renderButton()}
          </View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderJob.bind(this)}
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
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
        <View style={{flexDirection: 'column', justifyContent: 'space-between', marginRight: 20}}>
          <Text style={styles.item}>{job.title}</Text>
          <Text style={styles.deadline}>{job.due_date}</Text>
        </View>
        <TouchableOpacity onPress={() => this.deleteJob(job)} style={[styles.buttonSmall]}>
          <Text style={[styles.defaultButtonText]}>Delete item</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.editJob(job)} style={[styles.buttonSmall]}>
          <Text style={[styles.defaultButtonText]}>Edit item</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderButton() {
    return (
      <TouchableOpacity onPress={() => this.saveJob()} style={[styles.button, {alignSelf: 'center'}]}>
        <Text style={[styles.defaultButtonText]}>Save item</Text>
      </TouchableOpacity>
    );
  }

  async fetchData() {
    let response = await fetch(`${Config.current().url}/tenants/${tenant_id}/todo_items`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.updateList(response);
  }

  saveJob() {
    let url;
    if (this.state.id) {
      url = `${Config.current().url}/tenants/${tenant_id}/todo_items/${this.state.id}`;
      this.createUpdateJob(url, 'put');
    }
    else {
      url = `${Config.current().url}/tenants/${tenant_id}/todo_items`;
      this.createUpdateJob(url, 'post');
    }
  }

  async createUpdateJob(url, saveMethod) {
    let response = await fetch(url, {
      method: saveMethod,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.job,
        due_date: this.state.deadline
      })
    });
    this.updateList(response);
    this.setState({job: "", deadline: "", id: ""})
  }

  async deleteJob(job) {
    let response = await fetch(`${Config.current().url}/tenants/${tenant_id}/todo_items/${job.id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.updateList(response);
  }

  editJob(job) {
    this.setState({job: job.title, deadline: job.due_date, id: job.id});
  }

  async updateList(response) {
    if (response.status === 200) {
      let newList = await response.json();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newList),
        loaded: true,
      });
    }
  }
}
