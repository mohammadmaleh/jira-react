import { all as allSagas } from 'redux-saga/effects'
import { watchLoginAsync } from './login/login.saga'
export default function* rootSaga() {
  yield allSagas([watchLoginAsync()])
}
