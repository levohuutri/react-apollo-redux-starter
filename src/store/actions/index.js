import { takeLatest } from "redux-saga"
import {call, put} from "redux-saga/effects"

export const ADD_COUNT = 'ADD_COUNT'

export function *addCount(amount) {
  yield put({type: ADD_COUNT, payload: amount})
}

export function* fetchSaga() {  
  yield* takeLatest(ADD_COUNT, addCount)
}

export default fetchSaga