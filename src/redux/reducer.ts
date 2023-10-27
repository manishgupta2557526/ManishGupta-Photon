const reducer = (state, action) => {
  if (action.type === "SET_PAGE_TITLE") {
    return {
      ...state,
      pageTitle: action.payload
    };
  }
  return state;
};

export default reducer;
