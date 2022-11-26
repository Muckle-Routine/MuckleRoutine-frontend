export type CommonResponse<ResultType> = {
    status: 'success' | string;
    message: string;
    result: ResultType;
};

export type RoutineStatus = 'proceed' | 'start' | 'end';
