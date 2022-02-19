import { AuthActions } from "../reducers/authReducer";
import { initValues } from "../validations/loginForm";

import { Dispatch } from "redux";
import { fetchRemoteData } from "../helpers/fetchRemoteData";

interface LoginType {
  username: string;
  token: string;
}

export const signInEmailPassword = ({ email, password }: typeof initValues) => {
  return async (dispatch: Dispatch<AuthActions>) => {
    await fetchRemoteData({
      endpoint: "/endpoint",
      payload: { email, password },
      method: "POST",
    });

    dispatch({
      type: "[Auth] LOGIN",
      payload: { username: email, token: "jdjdjdjdj" },
    });
  };
};

export const login = ({ username, token }: LoginType): AuthActions => ({
  type: "[Auth] LOGIN",
  payload: {
    token,
    username,
  },
});
