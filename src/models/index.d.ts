import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class DestinationAcc {
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly acc_num: number;
  readonly DestinationAccTransactions?: (DestinationAccTransaction | null)[];
  constructor(init: ModelInit<DestinationAcc>);
  static copyOf(source: DestinationAcc, mutator: (draft: MutableModel<DestinationAcc>) => MutableModel<DestinationAcc> | void): DestinationAcc;
}

export declare class DestinationAccTransaction {
  readonly id: string;
  readonly destinationacc: DestinationAcc;
  readonly transaction: Transaction;
  constructor(init: ModelInit<DestinationAccTransaction>);
  static copyOf(source: DestinationAccTransaction, mutator: (draft: MutableModel<DestinationAccTransaction>) => MutableModel<DestinationAccTransaction> | void): DestinationAccTransaction;
}

export declare class Transaction {
  readonly id: string;
  readonly type: string;
  readonly currency: string;
  readonly amount: number;
  readonly swift_code?: string;
  readonly beneficiary_bank?: string;
  readonly purpose_of_transfer?: string;
  readonly sourceaccountID?: string;
  readonly transactiontypeID?: string;
  readonly destinationaccs?: (DestinationAccTransaction | null)[];
  constructor(init: ModelInit<Transaction>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}

export declare class TransactionType {
  readonly id: string;
  readonly transac_type_id?: string;
  readonly transac_type_name?: string;
  readonly Transactions?: (Transaction | null)[];
  constructor(init: ModelInit<TransactionType>);
  static copyOf(source: TransactionType, mutator: (draft: MutableModel<TransactionType>) => MutableModel<TransactionType> | void): TransactionType;
}

export declare class SourceAcc {
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly Transactions?: (Transaction | null)[];
  readonly acc_num: number;
  constructor(init: ModelInit<SourceAcc>);
  static copyOf(source: SourceAcc, mutator: (draft: MutableModel<SourceAcc>) => MutableModel<SourceAcc> | void): SourceAcc;
}