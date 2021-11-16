import Axios, { AxiosInstance, Method } from 'axios';
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { SignupResponse } from '../classes/response-classes';

// Return type of array item, if T is an array
type ItemIfArray<T> = T extends (infer I)[] ? I : T;
export const API_URL = 'http://localhost:3001';

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
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
    ).data;
    return responseClass ? plainToClass(responseClass, res) : res;
  }

  signup = {
    post: async (body: {
      email: string;
      password: string;
      name: string;
    }): Promise<unknown> => {
      return this.req('POST', `${API_URL}/sign-up`, SignupResponse, body);
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
