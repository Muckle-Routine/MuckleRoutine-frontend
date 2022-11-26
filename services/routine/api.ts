import { AxiosInstance } from 'axios';
import baseClient from '../client';
import { CommonResponse } from '../types';
import { Routine } from './types';

class RoutineAPi {
    private readonly api: AxiosInstance;

    constructor(axiosClient: AxiosInstance) {
        this.api = axiosClient;
    }

    async addRoutine(data: Routine) {
        const response = await this.api.request<CommonResponse<any>>({
            method: 'POST',
            url: '/routine/add',
            data,
        });
        return response.data.result;
    }

    async fetchRoutines(category = '') {
        const response = await this.api.request<CommonResponse<any>>({
            method: 'GET',
            url: '/routine/get',
        });
        return response.data.result;
    }

    async fetchRoutineDetail(routineId: number) {
        const response = await this.api.request<CommonResponse<any>>({
            method: 'GET',
            url: `/routine/get/${routineId}`,
        });
        return response.data.result;
    }
}

export const routineApi = new RoutineAPi(baseClient);
