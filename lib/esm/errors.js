export class WalletError extends Error {
    constructor(message, error) {
        super(message || error?.message);
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.message = message || error?.message || '.js';
        this.name = this.constructor.name;
        if (error?.stack)
            this.stack = error.stack;
    }
}
export class WalletNotReadyError extends WalletError {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WalletNotReadyError'
        });
    }
}
export class WalletLoadError extends WalletError {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WalletLoadError'
        });
    }
}
export class WalletConfigError extends WalletError {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WalletConfigError'
        });
    }
}
export class WalletConnectionError extends WalletError {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WalletConnectionError'
        });
    }
}
export class WalletDisconnectedError extends WalletError {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WalletDisconnectedError'
        });
    }
}
export class WalletDisconnectionError extends WalletError {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WalletDisconnectionError'
        });
    }
}
export class WalletAccountError extends WalletError {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WalletAccountError'
        });
    }
}
export class WalletPublicKeyError extends WalletError {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WalletPublicKeyError'
        });
    }
}
export class WalletSignTransactionError extends WalletError {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WalletSignTransactionError'
        });
    }
}
export class WalletSignMessageError extends WalletError {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WalletSignMessageError'
        });
    }
}
export class WalletSendTransactionError extends WalletError {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WalletSendTransactionError'
        });
    }
}
export class WalletNotConnectedError extends WalletError {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WalletNotConnectedError'
        });
    }
}
//# sourceMappingURL=errors.js.map