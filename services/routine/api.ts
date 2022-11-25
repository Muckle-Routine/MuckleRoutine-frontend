import apiClient from '../client';
import { CommonResponse } from '../types';
import { UpdateRoutineResult } from './types';

export async function updateRoutine(routine_no: number, certification_rules: string[]): Promise<number> {
    const response = await apiClient.put<CommonResponse<UpdateRoutineResult>>(`/routine/update/${routine_no}`, {
        certification_rules,
    });
    return response.data.result.routine_no;
}

export async function deleteRoutine(routine_no: number): Promise<boolean> {
    const response = await apiClient.delete<CommonResponse<void>>(`/routine/delete/${routine_no}`);
    return response.data.status === 'success';
}
