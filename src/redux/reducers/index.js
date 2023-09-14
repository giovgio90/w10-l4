const initialState = {
  query: "",
  jobs: [],
  favorites: [],
  company_name: "", // Aggiungi questa chiave per conservare il nome dell'azienda
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "SET_COMPANY_NAME":
      return {
        ...state,
        company_name: action.payload,
      };
    case "SET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((companyName) => companyName !== action.payload),
      };

    default:
      return state;
  }
};

export default appReducer;
