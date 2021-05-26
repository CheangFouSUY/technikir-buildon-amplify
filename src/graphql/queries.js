/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      first_name
      last_name
      acc_num
      balance
      address
      phone_number
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        acc_num
        balance
        address
        phone_number
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAccounts = /* GraphQL */ `
  query SyncAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        first_name
        last_name
        acc_num
        balance
        address
        phone_number
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      type
      currency
      amount
      swift_code
      beneficiary_bank
      purpose_of_transfer
      date
      branch_name
      customer_verified_by
      register_number
      approval
      checked_by
      uploaded_by
      teller_name
      source_id
      beneficiary_id
      progress
      beneficiary_firstname
      beneficiary_lastname
      beneficiary_address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        currency
        amount
        swift_code
        beneficiary_bank
        purpose_of_transfer
        date
        branch_name
        customer_verified_by
        register_number
        approval
        checked_by
        uploaded_by
        teller_name
        source_id
        beneficiary_id
        progress
        beneficiary_firstname
        beneficiary_lastname
        beneficiary_address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTransactions = /* GraphQL */ `
  query SyncTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        currency
        amount
        swift_code
        beneficiary_bank
        purpose_of_transfer
        date
        branch_name
        customer_verified_by
        register_number
        approval
        checked_by
        uploaded_by
        teller_name
        source_id
        beneficiary_id
        progress
        beneficiary_firstname
        beneficiary_lastname
        beneficiary_address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
