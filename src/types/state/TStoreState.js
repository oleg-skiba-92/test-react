// @flow
import type {TNewsState} from "./TNewsState";
import type {TUserState} from "./TUserState";

export type TStoreState = {
  news: TNewsState,
  user: TUserState,
}