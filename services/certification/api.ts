import { AxiosInstance } from 'axios';
import { CommonResponse } from '../types';
import { UploadCertificationBody, VoteBody } from './types';
import baseClient from '../client';

class CertificationApi {
    private client: AxiosInstance;

    constructor(axiosClient: AxiosInstance) {
        this.client = axiosClient;
    }

    async getCertificationForVote(): Promise<any> {
        const respones = await this.client.request<CommonResponse<any>>({
            method: 'GET',
            url: '/certification/get/',
        });
        return respones.data.result;
    }

    async getLastCertification(routine_id: number): Promise<any> {
        const respones = await this.client.request<CommonResponse<any>>({
            method: 'GET',
            url: `/certification/get/${routine_id}`,
        });
        return respones.data.result;
    }

    async vote({ certificationNo, status, message }: VoteBody): Promise<boolean> {
        const response = await this.client.request<CommonResponse<void>>({
            method: 'POST',
            url: `/certification/vote/${certificationNo}?status=${status}&message=${message}`,
        });
        return response.data.status === 'success';
    }

    async uploadCertification(data: UploadCertificationBody) {
        const response = await this.client.request<CommonResponse<any>>({
            method: 'POST',
            url: ``,
            data,
        });
        return response.data.result;
    }
}

export const certificationApi = new CertificationApi(baseClient);
