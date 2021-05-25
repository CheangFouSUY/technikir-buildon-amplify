// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DestinationAcc, DestinationAccTransaction, Transaction, TransactionType, SourceAcc } = initSchema(schema);

export {
  DestinationAcc,
  DestinationAccTransaction,
  Transaction,
  TransactionType,
  SourceAcc
};