import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/deckActions'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const CARD = { suit: "CLUBS", image: "http://deckofcardsapi.com/static/img/4C.png", images: { svg: "http://deckofcardsapi.com/static/img/4C.svg", png: "http://deckofcardsapi.com/static/img/4C.png" }, code: "4C", value: "4" }

describe('deck actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('dispatches NEW_GAME action after creating deck', () => {
    nock('https://deckofcardsapi.com/')
      .get('/api/deck/new/shuffle/?deck_count=1')
      .reply(200, { remaining: 52, success: true, deck_id: "DECKID", shuffled: true })

    nock('https://deckofcardsapi.com/')
      .get('/api/deck/DECKID/draw/?count=1')
      .reply(200, { remaining: 51, success: true, deck_id: "DECKID", cards: [CARD] })

    const expectedActions = [
      { type: 'NEW_GAME', deckId: 'DECKID' }
    ]
    const store = mockStore({ deck: {}})

    return store.dispatch(actions.newGame())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  describe('draw card', () => {
    let defaultExpectedActions

    beforeEach(() => {
      nock('https://deckofcardsapi.com/')
        .get('/api/deck/DECKID/draw/?count=1')
        .reply(200, { remaining: 51, success: true, deck_id: "DECKID", cards: [CARD] })

      defaultExpectedActions = [
        { type: 'DRAW_CARD', card: CARD, remaining: 51 }
      ]
    })

    it('dispatches DRAW_CARD action on draw card', () => {
      const expectedActions = defaultExpectedActions
      const store = mockStore({ deck: {}})

      return store.dispatch(actions.drawCard('DECKID'))
        .then(() => { // return of async actions
          expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('dispatches CORRECT_GUESS action on draw card when correct guess is provided', () => {
      const expectedActions = [
        ...defaultExpectedActions,
        { type: 'CORRECT_GUESS', newCard: "4", points: 0 }
      ]
      const store = mockStore({ deck: {}})

      return store.dispatch(actions.drawCard('DECKID', -1, 'QUEEN', ['QUEEN']))
        .then(() => { // return of async actions
          expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('dispatches INCORRECT_GUESS action on draw card when incorrect guess is provided', () => {
      const expectedActions = [
        ...defaultExpectedActions,
        { type: 'INCORRECT_GUESS', newCard: "4", points: 0 }
      ]
      const store = mockStore({ deck: {}})

      return store.dispatch(actions.drawCard('DECKID', 1, 'QUEEN', ['QUEEN']))
        .then(() => { // return of async actions
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})