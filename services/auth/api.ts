import { AxiosInstance } from 'axios';
import baseClient from '../client';
import { CommonResponse } from '../types';
import { GetRequestKeyResponse } from './types';

class AuthApi {
    private readonly api: AxiosInstance;

    constructor(axiosClient: AxiosInstance) {
        this.api = axiosClient;
    }

    async getRequestKey(): Promise<string> {
        const response = await this.api.request<CommonResponse<GetRequestKeyResponse>>({
            method: 'GET',
            url: '/klip/auth',
        });
        return response.data.result.request_key;
    }

    async getAccessToken(request_key: string) {
        const response = await this.api.request<string>({
            method: 'GET',
            url: `/login?requestNo=${request_key}`,
        });
        if (response.data) {
            localStorage.setItem('@token', response.data);
        }
    }
}

export const authApi = new AuthApi(baseClient);
