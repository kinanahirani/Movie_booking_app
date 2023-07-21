export const ADD_IMAGE = "ADD_IMAGE";
export const CLEAR_TODOS = "CLEAR_TODOS";
export const DELETE_TODO = "DELETE_TODO";

export const addImage = (img) => {
  return {
    type: ADD_IMAGE,
    data: img
  };
};

