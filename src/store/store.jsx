import { applyMiddleware, createStore,compose } from 'redux'
import rootReducer from './rootReducer'
import thunkMiddleware from 'redux-thunk'

export default () => {
  return createStore(rootReducer,
    compose(applyMiddleware(thunkMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
  )
}