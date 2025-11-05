import type { Transaction, VersionedTransaction } from '@solana/web3.js';
export type TransactionVersion = 'legacy' | 0;
export type SupportedTransactionVersions = readonly TransactionVersion[] | ReadonlySet<TransactionVersion>;
export type TransactionOrVersionedTransaction<T extends SupportedTransactionVersions | undefined = undefined> = T extends SupportedTransactionVersions ? T extends readonly TransactionVersion[] ? T extends readonly [TransactionVersion] ? T[0] extends 'legacy' ? Transaction : T[0] extends 0 ? VersionedTransaction : Transaction | VersionedTransaction : Transaction | VersionedTransaction : Transaction | VersionedTransaction : Transaction | VersionedTransaction;
export declare function isVersionedTransaction(transaction: Transaction | VersionedTransaction): transaction is VersionedTransaction;
//# sourceMappingURL=transaction.d.ts.map