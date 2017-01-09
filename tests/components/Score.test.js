import React from 'react'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store';

import Score from '../../src/components/Score'

const mockStore = configureMockStore();
const storeStateMock = {
  deck: {
    id: 'DECKID',
    currentCard: {
      value: '4',
      image: 'test.png'
    },
    faceUpPile: ['KING', 'QUEEN', '4'],
    remaining: 4
  },
  game: {
    currentPlayer: 0,
    correctGuesses: 1,
    scores: { 0: 23, 1: 15 }
  }
};

let store;
let component;
describe('Score', () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    component = shallow(<Score store={store} />).shallow();
  });

  it('displays the correct score', () => {
    expect(component.text()).toContain("Player 1's turn");
    expect(component.text()).toContain("Correct Guesses: 1");
    expect(component.text()).toContain("Cards Remaining: 4");
    expect(component.text()).toContain("Player 1: 23");
    expect(component.text()).toContain("Player 2: 15");
  });
});
