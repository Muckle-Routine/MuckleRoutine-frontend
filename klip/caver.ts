import Caver, { TransactionReceipt } from 'caver-js';

const caver = new Caver();

export function subscribeToTransactionResult(
    txHash: string,
    callback: (error: Error, result: TransactionReceipt | null) => void,
) {
    caver.rpc.klay.getTransactionReceipt(txHash, callback);
}
