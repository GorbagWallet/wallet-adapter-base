"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMessageSignerWalletAdapter = void 0;
const adapter_1 = require("./adapter");
const transaction_1 = require("./transaction");
class BaseMessageSignerWalletAdapter extends adapter_1.BaseWalletAdapter {
    async prepareTransaction(transaction, connection, options = {}) {
        const publicKey = this.publicKey;
        if (!publicKey)
            throw new Error('Wallet not connected');
        transaction.feePayer = transaction.feePayer || publicKey;
        transaction.recentBlockhash =
            transaction.recentBlockhash ||
                (await connection.getLatestBlockhash({
                    commitment: options.preflightCommitment,
                    minContextSlot: options.minContextSlot,
                })).blockhash;
        return transaction;
    }
    async sendTransaction(transaction, connection, options = {}) {
        if ((0, transaction_1.isVersionedTransaction)(transaction)) {
            // For versioned transactions, we need to use signAndSendTransaction directly
            throw new Error('Versioned transactions should be signed and sent directly by the wallet');
        }
        const signedTransaction = await this.signTransaction(transaction);
        return await connection.sendRawTransaction(signedTransaction.serialize(), options);
    }
}
exports.BaseMessageSignerWalletAdapter = BaseMessageSignerWalletAdapter;
//# sourceMappingURL=signer.js.map