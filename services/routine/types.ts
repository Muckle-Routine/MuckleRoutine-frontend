import { RoutineStatus } from '../types';

type Category = {
    id: number;
    name: string;
};

type CertificationCycle =
    | 'every-day'
    | 'every-weekday'
    | 'every-weekend'
    | 'once-a-week'
    | 'twice-a-week'
    | 'three-times-a-week'
    | 'four-times-a-week'
    | 'five-times-a-week'
    | 'six-times-a-week';

export type CreateRoutineBody = {
    tilte: string;
    description: string;
    category: Category;
    certification_rules: string[];
    certification_cycle: CertificationCycle;
    skeleton: number;
    fee: number;
    start: string;
    end: string;
};

export type SearchRoutinesBody = {
    keyword: string;
    start?: Date;
    end?: Date;
    status?: RoutineStatus;
    fee?: number;
};

export type SearchRoutineResult = {
    routine_no: number;
    title: string;
    description: string;
    status: RoutineStatus;
    certification_rules: string[];
    certification_cycle: CertificationCycle;
    skeleton: string;
    fee: number;
    start: Date;
    end: Date;
    create_date: Date;
    maker: string; //creator_address
    participants: string[];
    contract_address: string;
};

export type UpdateRoutineResult = {
    routine_no: number;
};
