export type UserInfo = SignInInfo & {
  readonly name: string;
};

export type SignInInfo = {
  readonly email: string;
  readonly password: string;
};
export type BookmarksInfo = {
  readonly bookmarks: string[];
};
export type AuthenticatedUser = {
  readonly id: number;
  readonly name?: string;
  readonly email: string;
  readonly bookmarks: string[];
  readonly accessToken: string;
};

export type UserAuthPayload = {
  readonly userId: number;
};
