'use strict';

let React = require('react-native');

export default { styles };

export let styles = React.StyleSheet.create({
  button: {
    height: 30,
    width: 200,
    backgroundColor: 'yellow',
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6
  },
  buttonSmall: {
    height: 30,
    width: 100,
    backgroundColor: 'yellow',
    paddingTop: 5,
    paddingBottom: 10,
    margin: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6
  },
  defaultButtonText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: 50
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listView: {
    //padding: 10,

  },
  input: {
    height: 30,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 5,
    textAlign: 'left',
    fontSize: 14
  },
  item: {
    paddingTop: 10,
    textAlign: 'left',
  },
  deadline: {
    color: 'red',
    textAlign: 'left',
  }
});
