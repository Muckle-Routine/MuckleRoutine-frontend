import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

const baseClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MERKEL_SERVER_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

baseClient.interceptors.request.use(
    (config) => {
        if (config.url?.includes('/auth') || config.url?.includes('/login')) return config;
        const accessToken = localStorage.getItem('@token');
        return {
            ...config,
            headers: {
                ...config.headers,
                Authorization: `Bearer ${accessToken}`,
            },
        };
    },
    (error) => Promise.reject(error),
);

baseClient.interceptors.request.use(AxiosLogger.requestLogger);
baseClient.interceptors.response.use(AxiosLogger.responseLogger);

export default baseClient;
