import { createReducer } from '@utils/reducer'
import * as actions from '../constants'

interface Errors {
  firstName?: string
  lastName?: string
}

interface State {
  firstName: string
  lastName: string
  errors?: Errors
}

const initialState: State = {
  firstName: '',
  lastName: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({
    ...state,
    [field]: value,
  }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
  [actions.clear]: () => initialState,
})
