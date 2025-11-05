"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletNotConnectedError = exports.WalletSendTransactionError = exports.WalletSignMessageError = exports.WalletSignTransactionError = exports.WalletPublicKeyError = exports.WalletAccountError = exports.WalletDisconnectionError = exports.WalletDisconnectedError = exports.WalletConnectionError = exports.WalletConfigError = exports.WalletLoadError = exports.WalletNotReadyError = exports.WalletError = void 0;
class WalletError extends Error {
    constructor(message, error) {
        super(message || (error === null || error === void 0 ? void 0 : error.message));
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.message = message || (error === null || error === void 0 ? void 0 : error.message) || '';
        this.name = this.constructor.name;
        if (error === null || error === void 0 ? void 0 : error.stack)
            this.stack = error.stack;
    }
}
exports.WalletError = WalletError;
class WalletNotReadyError extends WalletError {
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
exports.WalletNotReadyError = WalletNotReadyError;
class WalletLoadError extends WalletError {
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
exports.WalletLoadError = WalletLoadError;
class WalletConfigError extends WalletError {
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
exports.WalletConfigError = WalletConfigError;
class WalletConnectionError extends WalletError {
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
exports.WalletConnectionError = WalletConnectionError;
class WalletDisconnectedError extends WalletError {
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
exports.WalletDisconnectedError = WalletDisconnectedError;
class WalletDisconnectionError extends WalletError {
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
exports.WalletDisconnectionError = WalletDisconnectionError;
class WalletAccountError extends WalletError {
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
exports.WalletAccountError = WalletAccountError;
class WalletPublicKeyError extends WalletError {
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
exports.WalletPublicKeyError = WalletPublicKeyError;
class WalletSignTransactionError extends WalletError {
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
exports.WalletSignTransactionError = WalletSignTransactionError;
class WalletSignMessageError extends WalletError {
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
exports.WalletSignMessageError = WalletSignMessageError;
class WalletSendTransactionError extends WalletError {
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
exports.WalletSendTransactionError = WalletSendTransactionError;
class WalletNotConnectedError extends WalletError {
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
exports.WalletNotConnectedError = WalletNotConnectedError;
//# sourceMappingURL=errors.js.map