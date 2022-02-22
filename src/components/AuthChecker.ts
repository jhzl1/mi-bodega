import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, USER_INFO } from "../actions/auth";
import miBodegaApi from "../api/miBodegaApi";
import { RootState } from "../store/store";

interface UserInfo {
  username: string;
  token: string;
}

const AuthChecker = () => {
  const dispatch = useDispatch();

  const { token, status } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const userInfo = JSON.parse(
      localStorage.getItem(USER_INFO) as never
    ) as UserInfo;

    if (userInfo) {
      const { token, username } = userInfo;
      dispatch(login({ username: username, token }));
    }

    if (status === "is-authenticated") {
      miBodegaApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete miBodegaApi.defaults.headers.common["Authorization"];
    }
  }, [dispatch, status, token]);

  return null;
};

export default AuthChecker;
