import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './styles'

export const ToDoItem = (props) => {
  let to_do_item = props.to_do_item
  return <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
    <View style={{flexDirection: 'column', justifyContent: 'space-between', marginRight: 20}}>
      <Text style={styles.item}>{to_do_item.title}</Text>
      <Text style={styles.deadline}>{to_do_item.due_date}</Text>
    </View>
    <TouchableOpacity onPress={() => props.deleteToDoItem(to_do_item)} style={[styles.buttonSmall]}>
      <Text style={[styles.defaultButtonText]}>Delete</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.editToDoItem(to_do_item)} style={[styles.buttonSmall]}>
      <Text style={[styles.defaultButtonText]}>Edit</Text>
    </TouchableOpacity>
  </View>
}
