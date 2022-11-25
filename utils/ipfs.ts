import fleekStorage from '@fleekhq/fleek-storage-js';

export async function getImageFromIpfs(key: string) {
    return await fleekStorage.get({
        apiKey: process.env.NEXT_PUBLIC_IFPS_STORAGE_API_KEY || '',
        apiSecret: process.env.NEXT_PUBLIC_IFPS_STORAGE_API_SECRET_KEY || '',
        key,
        getOptions: ['data', 'bucket', 'key', 'hash', 'publicUrl'],
    });
}

export async function uploadImage(filePath: string) {
    //  fleekStorage.
}
