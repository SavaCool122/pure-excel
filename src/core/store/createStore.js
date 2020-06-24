export function createStore(rootReduce, initialState) {
  let state = rootReduce({...initialState}, {type: '__INIT__'})
  let listeners = []

  return {
    subscribe(fn) {
      listeners.push(fn)
      return () => {
        listeners = listeners.filter(l => l !== fn)
      }
    },
    dispatch(action) {
      state = rootReduce(state, action)
      listeners.forEach(listener => listener(state))
    },
    getState() {
      return JSON.parse(JSON.stringify(state))
    }
  }
}
