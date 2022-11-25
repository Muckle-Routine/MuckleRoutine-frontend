import { AxiosInstance } from 'axios';
import { CommonResponse } from '../types';
import { GetCertificationResult, UpdateCertificationParams, UpdateCertificationResult } from './types';
import baseClient from '../client';

class CertificationApi {
    private client: AxiosInstance;

    constructor(axiosClient: AxiosInstance) {
        this.client = axiosClient;
    }

    async uploadCertification() {
        const response = await this.client.request<CommonResponse<void>>({
            method: 'POST',
            url: '/certification/upload',
            // data:
        });
    }

    async getCertification(certification_no: number): Promise<GetCertificationResult> {
        const respones = await this.client.request<CommonResponse<GetCertificationResult>>({
            method: 'GET',
            url: `/certification/${certification_no}`,
        });
        return respones.data.result;
    }

    async updateCertification({
        certification_no,
        certification,
    }: UpdateCertificationParams): Promise<UpdateCertificationResult> {
        const response = await this.client.request<CommonResponse<UpdateCertificationResult>>({
            method: 'PUT',
            url: `/certification/update/${certification_no}`,
            data: certification,
        });
        return response.data.result;
    }

    async deleteCertification(certification_no: number): Promise<boolean> {
        const response = await this.client.request<CommonResponse<void>>({
            method: 'DELETE',
            url: `/certification/${certification_no}`,
        });
        return response.data.status === 'success';
    }
}

export const certificationApi = new CertificationApi(baseClient);
