export const MERKLE_ROUTINE_ABI = {
    createRoutine: {
        inputs: [
            {
                internalType: 'enum MerkleRoutine.Term',
                name: '_term',
                type: 'uint8',
            },
        ],
        name: 'createRoutine',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'payable',
        type: 'function',
        payable: true,
    },
    participateRoutine: {
        inputs: [
            {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256',
            },
        ],
        name: 'participateRoutine',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
        payable: true,
    },
    cancelParticipate: {
        inputs: [
            {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256',
            },
        ],
        name: 'cancelParticipateRoutine',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
        payable: true,
    },
};
