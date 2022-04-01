import Axios, { AxiosInstance, Method } from 'axios';
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { Redirect } from '../classes/response-classes';

// Return type of array item, if T is an array
type ItemIfArray<T> = T extends (infer I)[] ? I : T;
export const API_URL = 'http://localhost:3001';

type TimeUnits = 'years' | 'months' | 'days' | 'weeks';

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
   */
  private async req<T>(
    method: Method,
    url: string,
    responseClass?: ClassType<ItemIfArray<T>>,
    body?: any,
  ): Promise<T>;
  private async req<T>(
    method: Method,
    url: string,
    responseClass?: ClassType<T>,
    body?: any,
  ): Promise<T> {
    const res = (
      await this.axios.request({
        method,
        url,
        data: body,
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
  };

  helloWorld = {
    get: async (): Promise<string> => {
      return this.req('GET', '');
    },
  };

  contraceptive = {
    getAll: async (): Promise<Contraceptive[]> => {
      return this.req('GET', `${API_URL}/contraceptive`);
    },
  };

  constructor(baseURL = '') {
    this.axios = Axios.create({ baseURL: baseURL });
  }
}

export const API = new APIClient(API_URL);
