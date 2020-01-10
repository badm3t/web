import { createReducer } from '@utils/reducer'

const initialState = {
  apiUrl: process.env.API_URL || 'https://gateway.examine.aunited.pro/graphql',
}

export default createReducer(initialState, {})
