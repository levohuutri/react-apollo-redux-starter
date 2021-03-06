import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import ApolloClientSingleton from '../network/apollo-client-singleton'
import * as reducers from './reducers'
import { fetchSaga } from './actions'

export default class Store {
  constructor(history, initialState = {}) {
    const reducer = combineReducers({
      ...reducers,
      apollo: ApolloClientSingleton.reducer(),
      routing: routerReducer
    })

    const sagaMiddleware = createSagaMiddleware()

    this.data = createStore(
      reducer,
      initialState,
      compose(
        applyMiddleware(
          routerMiddleware(history),
          ApolloClientSingleton.middleware(),
          sagaMiddleware
        ),
         typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
      )
    )

    sagaMiddleware.run(fetchSaga)
  }
}
