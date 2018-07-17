// @flow
import type {TUser} from "../TUser";

export type TUserState = {
  user: TUser | null;
  authToken: string;
  isLoggedIn: boolean;
  fetching: boolean;
  error: string;
}