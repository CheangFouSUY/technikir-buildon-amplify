import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Account {
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly acc_num: number;
  readonly balance: number;
  readonly address: string;
  readonly phone_number: string;
  constructor(init: ModelInit<Account>);
  static copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

export declare class Transaction {
  readonly id: string;
  readonly type: string;
  readonly currency: string;
  readonly amount: number;
  readonly swift_code?: string;
  readonly beneficiary_bank?: string;
  readonly purpose_of_transfer?: string;
  readonly date?: string;
  readonly branch_name: string;
  readonly customer_verified_by?: string;
  readonly register_number: number;
  readonly approval?: string;
  readonly checked_by?: string;
  readonly uploaded_by?: string;
  readonly teller_name?: string;
  readonly source_id: number;
  readonly beneficiary_id: number;
  readonly progress: string;
  constructor(init: ModelInit<Transaction>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}