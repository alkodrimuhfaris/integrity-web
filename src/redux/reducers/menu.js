const initialState = {
  menu: 'Home',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'CHANGE_MENU': {
      return {
        ...state,
        menu: action.payload,
      };
    }
  }
};
