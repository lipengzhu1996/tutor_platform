import { combineReducers } from 'redux'
import tutors, { TUTOR_DEFAULT_STATE } from './tutorReducer'

const appReducer = combineReducers({
    tutors
})

export const DEFAULT_STATE = {
    tutors: TUTOR_DEFAULT_STATE
}

export default appReducer