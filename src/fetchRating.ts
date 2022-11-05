import { CompetitiveProgrammingType } from "src/types";

export const apiQueries: {
  [site: string]: string;
} = {
  AtCoder: "atcoder",
  Codeforces: "codeforces",
  TopCoder: "topcoder_algorithm",
};

export const apiUrl = (accounts: CompetitiveProgrammingType[]) =>
  "/api/json?" +
  accounts
    .map(
      (account) =>
        `${apiQueries[account.name]}=${encodeURIComponent(account.userId)}`
    )
    .join("&");
