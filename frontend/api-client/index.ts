import { Header } from '@nestjs/common';
import Axios, { AxiosInstance, Method } from 'axios';
import { AxiosError } from 'axios';
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { Redirect } from '../classes/response-classes';

// Return type of array item, if T is an array
type ItemIfArray<T> = T extends (infer I)[] ? I : T;
export const API_URL = 'http://localhost:3001';

export type User = {
  id: number;
  email: string;
  bookmarks: string[];
  password: string;
  name: string;
};
export type TimeUnits = 'years' | 'months' | 'days' | 'weeks';

export type Tag = {
  id: number;
  label: string;
};

export type Benefit = {
  id: number;
  description: string;
};

export type SideEffect = {
  id: number;
  description: string;
};

export type ThingToKnow = {
  id: number;
  title: string;
  description: string;
};

export type Contraceptive = {
  id: number;
  name: string;
  usePatternLowBound: number;
  usePatternHighBound: number;
  usePatternUnits: TimeUnits;
  effectiveRate: number;
  costMin: number;
  costMax: number;
  accessibility: string;
  tags: Tag[];
  description: string;
  use: string;
  inCaseOfProblem: string;
  whenItStartsToWork: string[];
  howToStop: string;
  howToStopMethod: string;
  howToStopDurationText: string;
  howLongUntilFertility: string;
  benefits: Benefit[];
  sideEffects: SideEffect[];
  howItWorks: string;
  healthRisks: string;
  whoCantUse: string[];
  whereToAccess: string[];
  whoAdministers: string;
  costDescription: string;
  warning: string;
  thingsToKnow: ThingToKnow[];
};
class APIClient {
  private axios: AxiosInstance;

  /**
   * Send HTTP and return data, optionally serialized with class-transformer (helpful for Date serialization)
   * @param method HTTP method
   * @param url URL to send req to
   * @param responseClass Class with class-transformer decorators to serialize response to
   * @param body body to send with req
   * @param header
   */
  private async req<T>(
    method: Method,
    url: string,
    responseClass?: ClassType<ItemIfArray<T>>,
    body?: any,
    header?: any,
  ): Promise<T>;
  private async req<T>(
    method: Method,
    url: string,
    responseClass?: ClassType<T>,
    body?: any,
    header?: any,
  ): Promise<T> {
    const res = (
      await this.axios.request({
        method,
        url,
        data: body,
        headers: header,
        withCredentials: true,
      })
    ).data;
    return responseClass ? plainToClass(responseClass, res) : res;
  }

  signIn = {
    post: async (body: {
      email: string;
      password: string;
    }): Promise<Redirect> => {
      return this.req('POST', `${API_URL}/sign-in`, Redirect, body);
    },
  };
  deleteToken = {
    tokenDelete: async (): Promise<any> => {
      return this.req('GET', `${API_URL}/delete-token`, Redirect);
    },
  };
  signUp = {
    post: async (body: {
      email: string;
      password: string;
      name: string;
    }): Promise<Redirect> => {
      return this.req('POST', `${API_URL}/sign-up`, Redirect, body);
    },
  };

  user = {
    getName: async (): Promise<string> => {
      return this.req('GET', `${API_URL}/name`);
    },
    getEmail: async (): Promise<string> => {
      return this.req('GET', `${API_URL}/user/email`);
    },
    getPronouns: async (): Promise<string> => {
      return this.req('GET', `${API_URL}/user/pronouns`);
    },
    getBookmarks: async (cookie: any): Promise<string[]> => {
      return this.req(
        'GET',
        `${API_URL}/user/bookmarks`,
        undefined,
        undefined,
        cookie,
      );
    },
    postBookmark: async (bookmark: string): Promise<void> => {
      let body = {
        bookmark: bookmark,
      };
      return this.req('POST', `${API_URL}/user/bookmark`, undefined, body);
    },
    deleteBookmark: async (bookmark: string): Promise<void> => {
      let body = {
        bookmark: bookmark,
      };
      return this.req('DELETE', `${API_URL}/user/bookmark`, undefined, body);
    },
  };

  contraceptive = {
    getAll: async (): Promise<Contraceptive[]> => {
      return this.req('GET', `${API_URL}/contraceptive`);
    },
    getOne: async (contraceptive: string): Promise<Contraceptive> => {
      return await this.req('GET', `${API_URL}/contraceptive/${contraceptive}`);
    },
    getMany: async (contraceptive: string[]): Promise<Contraceptive[]> => {
      return this.req(
        'GET',
        `${API_URL}/contraceptive/many`,
        undefined,
        contraceptive,
      );
    },
  };

  helloWorld = {
    get: async (): Promise<string> => {
      return this.req('GET', '');
    },
  };

  constructor(baseURL = '') {
    this.axios = Axios.create({ baseURL: baseURL });
  }
}

export const API = new APIClient(API_URL);
