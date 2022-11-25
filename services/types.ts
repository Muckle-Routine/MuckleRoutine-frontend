export type CommonResponse<ResultType> = {
    status: 'success' | string;
    msg: string;
    result: ResultType;
};

export type RoutineStatus = 'proceed' | 'start' | 'end';
