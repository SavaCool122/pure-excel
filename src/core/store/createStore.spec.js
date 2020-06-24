import {createStore} from './createStore'

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    return {...state, count: state.count + 1}
  }
  return state
}

describe('CreateStore:', () => {
  let store
  let handler

  store = beforeEach(() => {
    store = createStore(reducer, initialState)
    handler = jest.fn()
  })

  test('should return object', () => {
    expect(store).toBeDefined()
    expect(store.dispatch).toBeDefined()
    expect(store.subscribe).toBeDefined()
    expect(store.getState).not.toBeUndefined()
  })

  test('should return object as a state', () => {
    expect(store.getState()).toBeInstanceOf(Object)
  })

  test('should return initial state', () => {
    expect(store.getState()).toEqual(initialState)
  })

  test('should change state action exist', () => {
    store.dispatch({type: 'ADD'})
    expect(store.getState().count).toBe(1)
  })

  test('should dont  change state action exist', () => {
    store.dispatch({type: 'NOT_EXIST_ACTION'})
    expect(store.getState().count).toBe(0)
  })

  test('should call subsrciber funcion', () => {
      store.subscribe(handler)
      store.dispatch({type: 'ADD'})
      expect(handler).toHaveBeenCalled()
      expect(handler).toHaveBeenCalledWith(store.getState())
      expect(store.getState().count).toBe(1)
  })

  test('should not call sub if unsibscribe', () => {
    const unsub = store.subscribe(handler)

    unsub()

    store.dispatch({type: 'ADD'})
    expect(handler).not.toHaveBeenCalled()
  })

  test('should dispatch in async way', () => {
    return new Promise(resolve => {
      setTimeout(() => {
        store.dispatch({type: 'ADD'})
      }, 500)

      setTimeout(() => {
        expect(store.getState().count).toBe(1)
        resolve()
      }, 1000)
    })
  })
})
