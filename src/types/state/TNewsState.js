// @flow
import type {TNews} from "../TNews";

export type TNewsState = {
  currentNews: TNews | null;
  news: TNews[];
  fetching: boolean;
  error: string;
}