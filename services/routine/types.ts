type CertificationCycle = 'EVERY_DAY' | 'WEEKDAY' | 'WEEKEND' | 'ONCE' | 'TWICE' | 'THREE' | 'FOUR' | 'FIVE' | 'SIX';

export type Routine = {
    no: number;
    tilte: string;
    description: string; // 인증 룰
    category: string;
    term: CertificationCycle;
    skeleton: number;
    fee: number;
    startDate: string;
    endDate: string;
    image1: string;
    image2: string;
};
