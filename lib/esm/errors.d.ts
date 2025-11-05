export declare class WalletError extends Error {
    message: string;
    constructor(message?: string, error?: Error);
}
export declare class WalletNotReadyError extends WalletError {
    name: string;
}
export declare class WalletLoadError extends WalletError {
    name: string;
}
export declare class WalletConfigError extends WalletError {
    name: string;
}
export declare class WalletConnectionError extends WalletError {
    name: string;
}
export declare class WalletDisconnectedError extends WalletError {
    name: string;
}
export declare class WalletDisconnectionError extends WalletError {
    name: string;
}
export declare class WalletAccountError extends WalletError {
    name: string;
}
export declare class WalletPublicKeyError extends WalletError {
    name: string;
}
export declare class WalletSignTransactionError extends WalletError {
    name: string;
}
export declare class WalletSignMessageError extends WalletError {
    name: string;
}
export declare class WalletSendTransactionError extends WalletError {
    name: string;
}
export declare class WalletNotConnectedError extends WalletError {
    name: string;
}
//# sourceMappingURL=errors.d.ts.map