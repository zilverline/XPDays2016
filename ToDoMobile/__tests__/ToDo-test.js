import 'react-native'
import React from 'react'
import ToDo from '../ToDo'
import { ToDoItem } from '../ToDoItem'

import renderer from 'react-test-renderer'

it('renders shows the loading message', () => {
  const todo = renderer.create(<ToDo />).toJSON();
  expect(todo).toMatchSnapshot();
})

it('renders a to_do_item', () => {
  const todo = renderer.create(
    <ToDoItem
      to_do_item={{id: 1, title: 'Eerste item'}}
      deleteToDoItem={(item) => {}}
      editToDoItem={(item) => {}}
    />
  ).toJSON();
  expect(todo).toMatchSnapshot();
})
