import { useAuthContext } from "./useAuthContext";
import { useEntryContext } from "./useEntryContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: entryDispatch } = useEntryContext();
  const logout = () => {
    // Remove user from storage
    localStorage.removeItem("user");

    // Dispatch logout action
    dispatch({ type: "LOGOUT" });
    entryDispatch({ type: "SET_ENTRIES", payload: null });
  };

  return { logout };
};
