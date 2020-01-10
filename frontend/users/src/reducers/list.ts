import { createReducer } from '@utils/reducer'
import * as actions from '../constants/list'

const initialState = {
  rows: [],
  count: 0,
}

const sorting = (filter, rows) => {
  return rows.sort((a, b) => {
    const valueA = a.profile[filter]
    const valueB = b.profile[filter]

    if (valueA.toLowerCase() > valueB.toLowerCase()) {
      return 1
    }

    if (valueA.toLowerCase() < valueB.toLowerCase()) {
      return -1
    }

    return 0
  })
}

export default createReducer(initialState, {
  [actions.load]: (state, { list }) => ({ ...state, ...list }),
  [actions.clear]: () => initialState,
  [actions.setFilter]: (state, { filter }) => {
    const rows = state.rows

    switch (filter) {
      case 'firstName':
        const sortedNames = sorting(filter, rows)
        return { ...state, rows: [...sortedNames ]}
      case 'email':
        const sortedEmails = sorting(filter, rows)
        return { ...state, rows: [...sortedEmails ]}
      case 'registeredAt':
        const sotredReg = sorting(filter, rows)
        return { ...state, rows: [...sotredReg ]}
      case 'lastLogonAt':
        const sortedLogon = sorting(filter, rows)
        return { ...state, rows: [...sortedLogon ]}
      default:
        return { ...state }
    }
  },
})
