export type UserInfo = {
  readonly email: string;
  readonly password: string;
  readonly name: string;
};

export type AuthenticatedUser = {
  readonly id: number;
  readonly name?: string;
  readonly email: string;
  readonly accessToken: string;
};
