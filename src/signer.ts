import type { Connection, SendOptions, Transaction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { BaseWalletAdapter, isVersionedTransaction } from './adapter';
import { TransactionOrVersionedTransaction } from './transaction';

export abstract class BaseMessageSignerWalletAdapter<Name extends string = string> extends BaseWalletAdapter<Name> {
    abstract signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T>;
    abstract signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]>;
    abstract signMessage(message: Uint8Array): Promise<Uint8Array>;

    protected async prepareTransaction(
        transaction: Transaction,
        connection: Connection,
        options: SendOptions = {}
    ): Promise<Transaction> {
        const publicKey = this.publicKey;
        if (!publicKey) throw new Error('Wallet not connected');

        transaction.feePayer = transaction.feePayer || publicKey;
        transaction.recentBlockhash =
            transaction.recentBlockhash ||
            (
                await connection.getLatestBlockhash({
                    commitment: options.preflightCommitment,
                    minContextSlot: options.minContextSlot,
                })
            ).blockhash;

        return transaction;
    }

    async sendTransaction<T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>>(
        transaction: T,
        connection: Connection,
        options: SendOptions = {}
    ): Promise<TransactionSignature> {
        if (isVersionedTransaction(transaction)) {
            // For versioned transactions, we need to use signAndSendTransaction directly
            throw new Error('Versioned transactions should be signed and sent directly by the wallet');
        }

        const signedTransaction = await this.signTransaction(transaction);
        return await connection.sendRawTransaction(signedTransaction.serialize(), options);
    }

    abstract supportedTransactionVersions?: Set<'legacy' | 0>;
}