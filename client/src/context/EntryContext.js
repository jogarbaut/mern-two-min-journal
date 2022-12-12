import { createContext, useReducer } from "react";

export const EntryContext = createContext();

export const entryReducer = (state, action) => {
  switch (action.type) {
    case "SET_ENTRIES":
      return {
        entries: action.payload,
      };
    case "CREATE_ENTRY":
      return {
        entries: [action.payload, ...state.entries],
      };
    case "UPDATE_ENTRY":
      const updatedEntry = action.payload;
      const updatedEntries = state.entries.map((entry) => {
        if (entry._id === updatedEntry._id) {
          return updatedEntry;
        }
        return entry;
      });
      return {
        ...state,
        entries: updatedEntries,
      };
    case "DELETE_ENTRY":
      return {
        entries: state.entries.filter(
          (entry) => entry._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const EntryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entryReducer, {
    entries: null,
  });

  return (
    <EntryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </EntryContext.Provider>
  );
};
