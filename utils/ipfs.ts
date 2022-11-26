import fleekStorage from '@fleekhq/fleek-storage-js';

const API_KEY = process.env.NEXT_PUBLIC_IFPS_STORAGE_API_KEY || '';
const SECRET_KEY = process.env.NEXT_PUBLIC_IFPS_STORAGE_API_SECRET_KEY || '';

export async function getImageFromIpfs(key: string) {
    return await fleekStorage.get({
        apiKey: API_KEY,
        apiSecret: SECRET_KEY,
        key,
        getOptions: ['data', 'bucket', 'key', 'hash', 'publicUrl'],
    });
}

export async function uploadImage(data: string, key: string) {
    await fleekStorage.upload({
        apiKey: API_KEY,
        apiSecret: SECRET_KEY,
        key,
        data,
    });
}
