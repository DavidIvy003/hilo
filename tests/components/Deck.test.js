import React from 'react'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store';

import Deck from '../../src/components/Deck'

const mockStore = configureMockStore();
const storeStateMock = {
  deck: {
    id: 'DECKID',
    currentCard: {
      value: '4',
      image: 'test.png'
    }
  }
};

let store;
let component;
describe('Deck', () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    component = shallow(<Deck store={store} />).shallow();
  });

  it('has the card image', () => {
    expect(component.find('img').props().src).toBe('test.png');
  });
});
