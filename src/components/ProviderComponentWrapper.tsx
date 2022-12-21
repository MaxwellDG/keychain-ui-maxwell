import React, {FC, ReactElement, useCallback, useMemo} from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    // SolflareWalletAdapter,
    TorusWalletAdapter,
    TrustWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import {RPC_URL, SOLANA_NETWORK} from '../utils/config';
import {toast} from "react-toastify";

interface Props {
    component: any
}

export const ProviderComponentWrapper : FC<Props> = ({ component }) : ReactElement => {

    const onWalletError = useCallback(
        (error: any) => {
            toast(error.message ? `${error.name}: ${error.message}` : error.name, { type: 'error' })
        },
        [],
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new TorusWalletAdapter(),
            new LedgerWalletAdapter(),
            // new SolflareWalletAdapter(),
            new TrustWalletAdapter(),
        ],
        []
    );

    return (
        <ConnectionProvider endpoint={RPC_URL}>
            <WalletProvider wallets={wallets} onError={onWalletError} autoConnect>
                <WalletModalProvider>{component}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}
