import { AxiosInstance } from 'axios';
import { CommonResponse } from '../types';
import { GetVoteCertificationResult, VoteCertificationParams, VoteCertificationResult } from './types';
import baseClient from '../client';

class VoteApi {
    private client: AxiosInstance;

    constructor(axiosClient: AxiosInstance) {
        this.client = axiosClient;
    }

    async getCertificationsForVote(): Promise<GetVoteCertificationResult> {
        const response = await this.client.request<CommonResponse<GetVoteCertificationResult>>({
            method: 'GET',
            url: '/vote',
        });
        return response.data.result;
    }

    async voteCertification(params: VoteCertificationParams): Promise<VoteCertificationResult> {
        const response = await this.client.request<CommonResponse<VoteCertificationResult>>({
            method: 'POST',
            url: `/vote`,
            data: params,
        });
        return response.data.result;
    }
}

export const voteApi = new VoteApi(baseClient);

// - vote-certification 변경
// ㄴ url: /vote
// ㄴ body: {
//      cetification_no: number;
//      isPass: boolean;
//      reason: string;
//   }
// - get certification for vote
//  ㄴ url: /vote
