import { CompetitiveProgrammingType } from "src/types";

export const apiQueries: {
  [site: string]: string;
} = {
  AtCoder: "atcoder",
  Codeforces: "codeforces",
  TopCoder: "topcoder_algorithm",
};

export const apiUrl = (accounts: CompetitiveProgrammingType[]) =>
  "http://kyopro-ratings.jp1.su8.run/json?" +
  accounts
    .map(
      (account) =>
        `${apiQueries[account.name]}=${encodeURIComponent(account.userId)}`
    )
    .join("&");
