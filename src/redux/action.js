export const ADD_IMAGE = "ADD_IMAGE";
export const ADD_DAY = "ADD_DAY";
export const ADD_TIME = "ADD_TIME";
export const ADD_DATE = "ADD_DATE";
export const ADD_SEATS="ADD_SEATS"

export const addImage = (img) => {
  return {
    type: ADD_IMAGE,
    data: img
  };
};

export const addDate=(text)=>{
  return{
    type:ADD_DATE,
    data:text
  }
}

export const addDay=(text)=>{
  return{
    type:ADD_DAY,
    data:text
  }
}

export const addTime=(text)=>{
  return{
    type:ADD_TIME,
    data:text
  }
}

export const addSeats=(text)=>{
  return{
    type:ADD_SEATS,
    data:text
  }
}