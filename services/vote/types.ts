export type VoteCertificationParams = {
    cetification_no: number;
    isPass: boolean;
    reason: string;
};

export type VoteCertificationResult = {
    my_vote_count: number;
};

export type GetVoteCertificationResult = {
    my_vote_count: number;
    certification_no: number;
    routine_title: string;
    certification_rules: string[];
    certification_image: string;
    certification_date: Date;
    reason: string;
};
