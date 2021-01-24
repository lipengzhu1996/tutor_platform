import ActionType from '../actions/actionType'

export const DEFAULT_LESSON_TYPE = 'Online'
export const DEAFULT_HOURLY_RATE = [20, 50];
export const DEFAULT_AVAILABILITY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const DEFAULT_GENDER = ['Male', 'Female']
export const STUDENT_LEVEL = ['Any', 'Elementary', 'Middle School', 'High School', 'College', 'Adult']
export const DEFAULT_STUDENT_LEVEL = 'Any'

export type tutorStateType = {
    tutorCount: number
    filter: {
        subject: string,
        lessonType: string,
        minHourlyRate: number,
        maxHourlyRate: number,
        availability: Array<string>,
        gender: Array<string>,
        studentsLevel: string,
    }
}

type actionType = {
    type: string
    payload: any,
}

export const TUTOR_DEFAULT_STATE: tutorStateType = {
    tutorCount: 0,
    filter: {
        subject: '',
        lessonType: DEFAULT_LESSON_TYPE,
        minHourlyRate: DEAFULT_HOURLY_RATE[0],
        maxHourlyRate: DEAFULT_HOURLY_RATE[1],
        availability: DEFAULT_AVAILABILITY,
        gender: DEFAULT_GENDER,
        studentsLevel: DEFAULT_STUDENT_LEVEL,
    }
}

export default function tutorReducer(state = TUTOR_DEFAULT_STATE, action: actionType) {
    switch (action.type) {
        case ActionType.ADD_TUTOR_COUNT:
            return {
                ...state,
                tutorCount: state.tutorCount + 1
            }
        case ActionType.SET_TUTOR_FILTER:
            return {
                ...state,
                filter: action.payload.filter
            }
        default:
            return state
    }
}