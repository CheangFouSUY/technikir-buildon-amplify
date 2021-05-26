// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Account, Transaction } = initSchema(schema);

export {
  Account,
  Transaction
};