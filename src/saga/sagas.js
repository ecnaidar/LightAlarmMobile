/**
 * Created by itryt on 04-May-17.
 */
import { call } from 'redux-saga/effects'
import * as api from '../util/api'

function* postColor(action) {
    const color = action.payload;
    yield call(api.postColor,color.slice(1,color.length))

}

export default function* watchColorChanged() {
    yield takeLatest('SET_COLOR', postColor)
}
