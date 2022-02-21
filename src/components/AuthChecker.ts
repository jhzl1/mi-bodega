import { useDispatch } from "react-redux";
import { login, USER_INFO } from "../actions/auth";

interface UserInfo {
  username: string;
  token: string;
}

const AuthChecker = () => {
  const dispatch = useDispatch();

  const userInfo = JSON.parse(
    localStorage.getItem(USER_INFO) as never
  ) as UserInfo;

  if (userInfo) {
    const { token, username } = userInfo;
    dispatch(login({ username: username, token }));
  }

  return null;
};

export default AuthChecker;
