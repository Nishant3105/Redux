const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'incrementby2')
        return { counter: state.counter + 2 }
    if (action.type === "decrementby2") {
        return { counter: state.counter - 2 }
    }
    return state
}

const store = redux.createStore(counterReducer)

console.log(store.getState())

const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({ type: 'incrementby2' })
store.dispatch({ type: 'incrementby2' })
store.dispatch({ type: 'incrementby2' })
store.dispatch({ type: 'decrementby2' })
store.dispatch({ type: ''})
