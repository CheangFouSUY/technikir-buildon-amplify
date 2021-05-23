/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDestinationAcc = /* GraphQL */ `
  query GetDestinationAcc($id: ID!) {
    getDestinationAcc(id: $id) {
      id
      first_name
      last_name
      acc_num
      createdAt
      updatedAt
      DestinationAccTransactions {
        nextToken
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTransactionType = /* GraphQL */ `
  query GetTransactionType($id: ID!) {
    getTransactionType(id: $id) {
      id
      transac_type_id
      transac_type_name
      createdAt
      updatedAt
      Transactions {
        nextToken
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
        createdAt
        updatedAt
      }
      nextToken
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
      createdAt
      updatedAt
      Transactions {
        nextToken
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
        createdAt
        updatedAt
      }
      nextToken
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
      createdAt
      updatedAt
      destinationaccs {
        nextToken
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
