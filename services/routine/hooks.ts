import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../statics';
import { routineApi } from './api';

export const useFetchRoutines = () => {
    return useQuery({
        queryKey: [QUERY_KEY.getAllRoutine],
        queryFn: () => routineApi.fetchRoutines(),
        retry: false,
        refetchOnMount: 'always',
    });
};

export const useFetchRoutineDetail = (routine_id: string) => {
    const routineId = Number(routine_id);
    return useQuery({
        queryKey: [QUERY_KEY.getRoutineDetail, routine_id],
        queryFn: () => routineApi.fetchRoutineDetail(routineId),
        retry: false,
        refetchOnMount: 'always',
    });
};
