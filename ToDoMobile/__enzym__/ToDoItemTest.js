import React, {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { shallow } from 'enzyme';
import { ToDoItem } from '../ToDoItem';
import { expect } from 'chai';
import { styles } from '../styles'
import sinon from 'sinon';

describe('<ToDoItem />', () => {

  it('renders the title', () => {
    const wrapper = shallow(<ToDoItem to_do_item={{title: 'Foo'}} />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.contains(<Text style={styles.item}>Foo</Text>)).to.equal(true)
  });

  it('has 2 buttons', () => {
    const wrapper = shallow(<ToDoItem to_do_item={{title: 'Foo'}} />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find(TouchableOpacity)).to.have.length(2)
  });

  it('can delete an item', () => {
    const onDelete = sinon.spy();
    const wrapper = shallow(<ToDoItem to_do_item={{title: 'Foo'}} deleteToDoItem={onDelete} />);
    expect(wrapper.length).to.equal(1);
    wrapper.find(TouchableOpacity).first().simulate('press')
    expect(onDelete).to.have.property('callCount', 1);
  });

});
