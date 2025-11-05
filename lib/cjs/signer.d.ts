import type { Connection, SendOptions, Transaction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { BaseWalletAdapter } from './adapter';
import { TransactionOrVersionedTransaction } from './transaction';
export declare abstract class BaseMessageSignerWalletAdapter<Name extends string = string> extends BaseWalletAdapter<Name> {
    abstract signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T>;
    abstract signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]>;
    abstract signMessage(message: Uint8Array): Promise<Uint8Array>;
    protected prepareTransaction(transaction: Transaction, connection: Connection, options?: SendOptions): Promise<Transaction>;
    sendTransaction<T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>>(transaction: T, connection: Connection, options?: SendOptions): Promise<TransactionSignature>;
    abstract supportedTransactionVersions?: Set<'legacy' | 0>;
}
//# sourceMappingURL=signer.d.ts.map