import { AuthActions } from "../reducers/authReducer";
import { initValues } from "../validations/loginForm";

import { Dispatch } from "redux";
import { fetchRemoteData } from "../helpers/fetchRemoteData";
import { addError } from "./ui";
import { UiActions } from "../reducers/uiReducer";
import { LoginRes } from "../interfaces/LoginRes";

interface LoginType {
  username: string;
  token: string;
}

export const USER_INFO = "user-data";

export const signInEmailPassword = ({ email, password }: typeof initValues) => {
  return async (dispatch: Dispatch<AuthActions | UiActions>) => {
    try {
      const { data } = await fetchRemoteData<LoginRes>({
        endpoint: "/auth/login",
        payload: { email, password },
        method: "POST",
      });
      const { token, username } = data;

      localStorage.setItem(USER_INFO, JSON.stringify({ token, username }));

      dispatch(login({ username, token }));
    } catch (error: any) {
      const errorMsg = error.response.data.msg;
      dispatch(addError(errorMsg));
    }
  };
};

export const login = ({ username, token }: LoginType): AuthActions => ({
  type: "[Auth] LOGIN",
  payload: {
    token,
    username,
  },
});

export const logout = (): AuthActions => {
  localStorage.removeItem(USER_INFO);

  return {
    type: "[Auth] LOGOUT",
  };
};
