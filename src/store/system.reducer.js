export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const SET_FILTER = 'SET_FILTER'

const initialState = {
  isLoading: false,
  filter: { keyword: '' }
};

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case SET_FILTER:
      return { ...state, filter: action.filter }
    default: return state
  }
}
