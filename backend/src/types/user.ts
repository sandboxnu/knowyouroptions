export type UserInfo = SignInInfo & {
  readonly name: string;
};

export type SignInInfo = {
  readonly email: string;
  readonly password: string;
};

export type AuthenticatedUser = {
  readonly id: number;
  readonly name?: string;
  readonly email: string;
  readonly accessToken: string;
};
