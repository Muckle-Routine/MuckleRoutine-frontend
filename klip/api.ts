import axios, { AxiosInstance } from 'axios';
import { Message, PrepareBody, PrepareResponse, PrepareType, ResultResponse, Transaction } from './types';

class KlipApi {
    private readonly api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: process.env.NEXT_PUBLIC_KLIP_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async prepare(type: PrepareType, transaction?: Transaction, message?: Message) {
        const data: PrepareBody = {
            bapp: {
                name: 'Merkle Routine',
                callback: {
                    success: process.env.NEXT_PUBLIC_DOMAIN_URL || '',
                    fail: process.env.NEXT_PUBLIC_DOMAIN_URL || '',
                },
            },
            type,
            transaction,
            message,
        };
        const response = await this.api.request<PrepareResponse>({
            method: 'POST',
            url: '/prepare',
            data,
        });
        return response.data;
    }

    async result(request_key: string) {
        const response = await this.api.request<ResultResponse>({
            method: 'GET',
            url: `/result?request_key=${request_key}`,
        });
        return {
            data: response.data,
            requestSucceeded: response.status === 200,
        };
    }
}

export const klipApi = new KlipApi();
