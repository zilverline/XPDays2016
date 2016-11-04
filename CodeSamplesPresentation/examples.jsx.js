import React from 'react'

class HelloMessage extends Component {

  render() {
    return <div>Hello {this.props.name}</div>
  }

}

var mountNode = document.getElementById('container')
ReactDOM.render(<HelloMessage name="Ben"/>, mountNode)

class HelloMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return <div>
      <ul>
        <li onClick={this.handleClick}>click me</li>
        {Array(this.state.count).fill().map(() => <li onClick={this.handleClick}>foobar</li>)}
      </ul>
      <Form {...props} />
    </div>
  }

  handleClick(event) {
    event.preventDefault()
    setState({count: this.state.count + 1})
  }
}

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'none'
    }
  }

  render() {
    return <form>
      <label>What is your favorite Color?</label>
      <input type="radio" onChange={setState({color: 'blue'})}/><label>Blue</label>
      <input type="radio" onChange={setState({color: 'red'})}/><label>Red</label>

      <div id="container">
        {this.state == 'blue' ? <div>What is the airspeed velocity of an unleaded swallow?</div> : null}
        {this.state == 'red' ? <div>What is your name?</div> : null}
      </div>
      <button>Save</button>
    </form>
  }
}

class StateSample extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  render() {
    return <ul>
      <li onClick={this.handleClick}>click me: {this.state.count}</li>
    </ul>
  }

  handleClick() {
    setState({count: this.state.count + 1})
  }
}

// REACT NATIVE

import React, { Component } from 'react'
import { Text, View, AppRegistry } from 'react-native'

class HelloMessage extends Component {
  constructor() {
    this.state = {name: 'Xpdays 2016'}
  }

  render() {
    return <View>
      <Text>Hello {this.state.name}</Text>
    </View>
  }
}

AppRegistry.registerComponent('HelloMessage', HelloMessage)
