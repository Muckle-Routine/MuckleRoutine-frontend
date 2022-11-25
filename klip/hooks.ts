import { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { getDeeplinkUrl } from 'utils/device';
import { klipApi } from './api';
import { PrepareType } from './types';

type Step = 'not-defined' | 'prepared' | 'result-resolved';
type ReturnType = [(type: PrepareType) => Promise<string | undefined>, () => void, () => void, () => void];

export const useKlip = (): ReturnType => {
    const router = useRouter();
    const deeplinkUrl = useRef<string>('');
    const step = useRef<Step>('not-defined');
    const requestKey = useRef<string>('');

    const handlePrepare = useCallback(async (type: PrepareType): Promise<string | undefined> => {
        const prepareResult = await klipApi.prepare(type);
        if (prepareResult) {
            deeplinkUrl.current = getDeeplinkUrl(prepareResult.request_key);
            requestKey.current = prepareResult.request_key;
            return prepareResult.request_key;
        }
    }, []);

    const handleRequest = useCallback(() => {
        if (deeplinkUrl.current) {
            router.push(deeplinkUrl.current);
            step.current = 'prepared';
        }
    }, [router]);

    const handleResult = useCallback(async () => {
        const result = await klipApi.result(requestKey.current);
        if (result.data.status === 'completed') {
            step.current = 'result-resolved';
        } else if (result.data.status === 'prepared') {
            step.current = 'prepared';
        } else {
            step.current = 'not-defined';
        }
    }, []);

    const handleLogin = useCallback(async () => {
        const request_key = await handlePrepare('auth');
        if (request_key) {
            handleRequest();
            handleResult();
        }
    }, [handlePrepare, handleRequest, handleResult]);

    useEffect(() => {
        const id = setInterval(() => {
            if (step.current === 'prepared') {
                handleResult();
            }
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, [handleResult]);

    return [handlePrepare, handleRequest, handleResult, handleLogin];
};
