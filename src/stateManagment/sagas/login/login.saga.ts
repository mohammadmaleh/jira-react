import { LOGIN_ASYNC_SAGA } from '../sagaActionsTypes'
import { login } from 'stateManagment/reducers/login/login.reducer'
import { call, takeEvery, put } from 'redux-saga/effects'
import Axios, { AxiosResponse } from 'axios'

let callAPI = async ({ url = '', method = 'GET', data = {} }): Promise<AxiosResponse> => {
  return await Axios({
    url,
    method,
    data,
  })
}
interface BackendResponse {
  success: boolean
  message: string
  data: any
}
export function* performLoginSaga(): Generator {
  try {
    const result = yield call(() => {
      return callAPI({
        url: 'http://127.0.0.1:5000/api/v1/auth/login',
        method: 'POST',
        data: {
          email: 'mohammad.maleh1@gmail.com',
          password: '123123',
        },
      })
    })
    yield put(login((result as BackendResponse).data.user))
  } catch (e) {
    console.log(e)
  }
}

// ...

export function* watchLoginAsync() {
  yield takeEvery(LOGIN_ASYNC_SAGA, performLoginSaga)
}
