import {ADD_DATE, ADD_DAY, ADD_IMAGE, ADD_SEATS, ADD_TIME} from './action';

const initialState = {
  image: '',
  day:'',
  time:'',
  day:'',
  seats:'',
};

export const reducer = (state = initialState, action) => {
  if (action.type === ADD_IMAGE) {
    return {
      ...state,
      image:action.data
    }
  }if (action.type === ADD_DATE) {
    return {
      ...state,
      date:action.data
    }
  }if (action.type === ADD_DAY) {
    return {
      ...state,
      day:action.data
    }
  }if (action.type === ADD_TIME) {
    return {
      ...state,
      time:action.data
    }
  }if (action.type === ADD_SEATS) {
    return {
      ...state,
      seats:action.data
    }
  } else {
    return state;
  }
};
