import { RoutineStatus } from '../types';

export type GetCertificationResult = {
    routine_no: number;
    certification_url: string;
    certification_date: Date;
    next_certification_Date: Date;
    status: RoutineStatus;
};

export type UpdateCertificationBody = {
    certification: FormData;
};

export type UpdateCertificationParams = {
    certification_no: number;
} & UpdateCertificationBody;

export type UpdateCertificationResult = {
    certification_no: number;
};
