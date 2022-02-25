const initialState = [];
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    case "EDIT_USER":
        return action.payload; 
    case "DELETE_USER":
        return action.payload; //mảng mà đã xóa đi object id 1
    default:
      return state;
  }
};

export default rootReducer;
// 
