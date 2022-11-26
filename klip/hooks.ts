import { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { getDeeplinkUrl } from 'utils/device';
import { klipApi } from './api';
import { Result, Transaction } from './types';
import { authApi } from '@/services/auth/api';
import { TransactionReceipt } from 'caver-js';
import { subscribeToTransactionResult } from './caver';

type Step = 'not-defined' | 'prepared' | 'result-resolved';
type ReturnType = [Result | undefined, () => void, (transaction: Transaction) => void];

export const useKlip = (): ReturnType => {
    const router = useRouter();
    const deeplinkUrl = useRef<string>('');
    const step = useRef<Step>('not-defined');
    const [result, setResult] = useState<Result | undefined>(undefined);

    const handleRequest = useCallback(
        (request_key: string) => {
            deeplinkUrl.current = getDeeplinkUrl(request_key);
            router.push(deeplinkUrl.current);
            step.current = 'prepared';
        },
        [router],
    );

    const handleResult = useCallback(async (request_key: string) => {
        const result = await klipApi.result(request_key);
        if (result.data.status === 'completed') {
            if (result.data.result?.status) {
                setResult(result.data.result);
                subscribeToTransactionResult(result.data.result.tx_hash, bindTransactionResultCallback);
            } else {
                authApi.getAccessToken(result.data.request_key);
            }
            step.current = 'result-resolved';
        } else if (result.data.status === 'prepared') {
            step.current = 'prepared';
            setTimeout(() => {
                handleResult(result.data.request_key);
            }, 2000);
        } else {
            step.current = 'not-defined';
        }
    }, []);

    const handleLogin = useCallback(async () => {
        const request_key = await authApi.getRequestKey();
        if (request_key) {
            handleRequest(request_key);
            handleResult(request_key);
        }
    }, [handleRequest, handleResult]);

    const handleExecuteContract = useCallback(
        async (transaction: Transaction) => {
            const prepareResult = await klipApi.prepare('execute_contract', transaction);
            if (prepareResult) {
                handleRequest(prepareResult.request_key);
                handleResult(prepareResult.request_key);
            }
        },
        [handleRequest, handleResult],
    );

    const bindTransactionResultCallback = (error: Error, result: TransactionReceipt | null) => {
        if (result?.logs) {
            const data = result?.logs[0].data;
        } else if (error) {
        }
    };

    return [result, handleLogin, handleExecuteContract];
};
