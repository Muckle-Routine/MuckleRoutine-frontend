export type PrepareType = 'auth' | 'send_klay' | 'send_token' | 'send_card' | 'sign_message' | 'execute_contract';
export type Status = 'prepared' | 'requested' | 'completed' | 'canceled' | 'error';
export type Transaction = {
    from?: string;
    to: string;
    value: string;
    abi?: string;
    params?: string;
    encoded_function_call?: string;
};

export type Message = {
    from: string;
    value: string;
};

export type PrepareBody = {
    bapp: {
        name: string;
        callback?: {
            success: string;
            fail: string;
        };
    };
    type: PrepareType;
    transaction?: Transaction;
    message?: Message;
};

export type PrepareResponse = {
    request_key: string;
    status: Status;
    expiration_time: number;
    error?: {
        code: number;
        message: string;
    };
};

export type ResultResponse = {
    request_key: string;
    status: Status;
    expiration_time: number;
    result?: Result;
};

export type Result = {
    tx_hash: string;
    status: 'success' | 'fail' | 'pending';
    // signature?: string; // for sign message
    // hash?: string; // for sign message
};
