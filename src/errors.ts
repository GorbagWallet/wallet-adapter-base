export class WalletError extends Error {
    message: string;
    constructor(message?: string, error?: Error) {
        super(message || error?.message);
        this.message = message || error?.message || '';
        this.name = this.constructor.name;
        if (error?.stack) this.stack = error.stack;
    }
}

export class WalletNotReadyError extends WalletError {
    name = 'WalletNotReadyError';
}

export class WalletLoadError extends WalletError {
    name = 'WalletLoadError';
}

export class WalletConfigError extends WalletError {
    name = 'WalletConfigError';
}

export class WalletConnectionError extends WalletError {
    name = 'WalletConnectionError';
}

export class WalletDisconnectedError extends WalletError {
    name = 'WalletDisconnectedError';
}

export class WalletDisconnectionError extends WalletError {
    name = 'WalletDisconnectionError';
}

export class WalletAccountError extends WalletError {
    name = 'WalletAccountError';
}

export class WalletPublicKeyError extends WalletError {
    name = 'WalletPublicKeyError';
}

export class WalletSignTransactionError extends WalletError {
    name = 'WalletSignTransactionError';
}

export class WalletSignMessageError extends WalletError {
    name = 'WalletSignMessageError';
}

export class WalletSendTransactionError extends WalletError {
    name = 'WalletSendTransactionError';
}

export class WalletNotConnectedError extends WalletError {
    name = 'WalletNotConnectedError';
}