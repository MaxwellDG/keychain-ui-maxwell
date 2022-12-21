// import { Idl } from '@project-serum/anchor';
// import keychainIdl from '../programs/idl/keychain.json';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const anchor = require('@project-serum/anchor');

// network config
export const SOLANA_NETWORK = process.env.REACT_APP_SOLANA_NETWORK as string;
export const RPC_URL: string = process.env.REACT_APP_RPC_ENDPOINT as string;

const CONFIRM_TIMEOUT_MILLIS = 1000 * 30; // 30 sec

export const connection = new anchor.web3.Connection(RPC_URL, {
    commitment: 'confirmed',
    confirmTransactionInitialTimeout: CONFIRM_TIMEOUT_MILLIS,
});

/*
export const getApiUrl = (path: string) => {
    let url = process.env.REACT_APP_BASE_API_URL;
    if (path) {
        url += path;
    }
    return url;
};
 */

