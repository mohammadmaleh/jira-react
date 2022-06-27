import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { loginReducer } from 'stateManagment/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'stateManagment/sagas/root.saga'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: combineReducers({
    login: loginReducer,
  }),
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})
sagaMiddleware.run(rootSaga)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
