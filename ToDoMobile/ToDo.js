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
import { ToDoItem } from './ToDoItem'

const tenant_id = 1;

export default class ToDo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      to_do_item: "",
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
              onChangeText={(to_do_item) => this.setState({to_do_item})}
              value={this.state.to_do_item}
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
            renderRow={(to_do_item) => <ToDoItem to_do_item={to_do_item} deleteToDoItem={(to_do_item) => this.deleteToDoItem(to_do_item)} editToDoItem={() => this.editToDoItem(to_do_item)} />}
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
        title: this.state.to_do_item,
        due_date: this.state.deadline
      })
    });
    this.updateList(response);
    this.setState({to_do_item: "", deadline: "", id: ""})
  }

  async deleteToDoItem(to_do_item) {
    let response = await fetch(`${Config.current().url}/tenants/${tenant_id}/todo_items/${to_do_item.id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.updateList(response);
  }

  editToDoItem(to_do_item) {
    this.setState({to_do_item: to_do_item.title, deadline: to_do_item.due_date, id: to_do_item.id});
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
