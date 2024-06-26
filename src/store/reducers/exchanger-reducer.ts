export type Exchange = {
  dollar: string
  euro: string
}

const initialState: Exchange = {
  dollar: '',
  euro: ''
}

type ActionType = ReturnType<typeof changeDollar> | ReturnType<typeof changeEuro>

export const exchangerReducer = (state = initialState, action: ActionType): Exchange => {
  switch (action.type) {
    case 'DOLLAR': {
      const newValue = (action.payload.value * 1.07).toFixed(2).toString()
      return {...state, dollar: action.payload.value, euro: newValue};
    }
    case 'EURO': {
      const newValue = (action.payload.value / 1.07).toFixed(2).toString()
      return {...state, euro: action.payload.value, dollar: newValue};
    }
    default:
      return state;
  }
};

export const changeDollar = (value: string) => {
  return {
    type: 'DOLLAR',
    payload: {value}
  } as const
}

export const changeEuro = (value: string) => {
  return {
    type: 'EURO',
    payload: {value}
  } as const
}