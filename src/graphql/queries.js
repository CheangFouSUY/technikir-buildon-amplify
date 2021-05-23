/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDestinationAcc = /* GraphQL */ `
  query GetDestinationAcc($id: ID!) {
    getDestinationAcc(id: $id) {
      id
      first_name
      last_name
      acc_num
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      DestinationAccTransactions {
        nextToken
        startedAt
      }
    }
  }
`;
export const listDestinationAccs = /* GraphQL */ `
  query ListDestinationAccs(
    $filter: ModelDestinationAccFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDestinationAccs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        acc_num
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
export const syncDestinationAccs = /* GraphQL */ `
  query SyncDestinationAccs(
    $filter: ModelDestinationAccFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDestinationAccs(
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
export const getTransactionType = /* GraphQL */ `
  query GetTransactionType($id: ID!) {
    getTransactionType(id: $id) {
      id
      transac_type_id
      transac_type_name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        nextToken
        startedAt
      }
    }
  }
`;
export const listTransactionTypes = /* GraphQL */ `
  query ListTransactionTypes(
    $filter: ModelTransactionTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactionTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        transac_type_id
        transac_type_name
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
export const syncTransactionTypes = /* GraphQL */ `
  query SyncTransactionTypes(
    $filter: ModelTransactionTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransactionTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        transac_type_id
        transac_type_name
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
export const getSourceAcc = /* GraphQL */ `
  query GetSourceAcc($id: ID!) {
    getSourceAcc(id: $id) {
      id
      first_name
      last_name
      acc_num
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        nextToken
        startedAt
      }
    }
  }
`;
export const listSourceAccs = /* GraphQL */ `
  query ListSourceAccs(
    $filter: ModelSourceAccFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSourceAccs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        acc_num
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
export const syncSourceAccs = /* GraphQL */ `
  query SyncSourceAccs(
    $filter: ModelSourceAccFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSourceAccs(
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
      sourceaccountID
      transactiontypeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      destinationaccs {
        nextToken
        startedAt
      }
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
        sourceaccountID
        transactiontypeID
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
        sourceaccountID
        transactiontypeID
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
export const syncDestinationAccTransactions = /* GraphQL */ `
  query SyncDestinationAccTransactions(
    $filter: ModelDestinationAccTransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDestinationAccTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        destinationaccID
        transactionID
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
