import {ADD_IMAGE} from './action';

const initialState = {
  image: '',
};

export const reducer = (state = initialState, action) => {
  if (action.type === ADD_IMAGE) {
    return {
      ...state,
      image:action.data
    }
  } else {
    return state;
  }
};
