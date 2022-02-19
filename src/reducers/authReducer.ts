export type AuthActions =
  | {
      type: "[Auth] LOGIN";
      payload: { username: string; token: string };
    }
  | { type: "[Auth] LOGOUT" };

export interface AuthState {
  username: string | null;
  token: string | null;
  status: "not-authenticated" | "is-authenticated";
}

export const initialState: AuthState = {
  username: null,
  token: null,
  status: "not-authenticated",
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case "[Auth] LOGIN":
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
        status: "is-authenticated",
      };
    case "[Auth] LOGOUT":
      return {
        ...state,
        username: null,
        token: null,
        status: "not-authenticated",
      };

    default:
      return state;
  }
};
