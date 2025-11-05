
import EventEmitter from 'eventemitter3';

export { EventEmitter };

export type {
    WalletName,
    WalletAdapter,
    WalletAdapterProps,
    WalletAdapterEvents,
    SendTransactionOptions,
} from './adapter';

export {
    BaseWalletAdapter,
    WalletReadyState,
    isIosAndRedirectable,
    scopePollingDetectionStrategy,
} from './adapter';

export { BaseMessageSignerWalletAdapter } from './signer';

export {
    WalletError,
    WalletNotReadyError,
    WalletLoadError,
    WalletConfigError,
    WalletConnectionError,
    WalletDisconnectedError,
    WalletDisconnectionError,
    WalletAccountError,
    WalletPublicKeyError,
    WalletSignTransactionError,
    WalletSignMessageError,
    WalletSendTransactionError,
    WalletNotConnectedError,
} from './errors';

export type {
    TransactionOrVersionedTransaction,
    TransactionVersion,
    SupportedTransactionVersions
} from './transaction';

export {
    isVersionedTransaction,
} from './transaction';
