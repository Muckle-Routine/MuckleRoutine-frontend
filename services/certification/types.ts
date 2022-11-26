export type VoteBody = {
    certificationNo: number;
    status: 'SUCCESS' | 'FAIL';
    message: string;
};

export type UploadCertificationBody = {
    routine_id: number;
    image: string;
};
