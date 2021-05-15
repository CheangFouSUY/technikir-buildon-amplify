/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      type
      currency
      amount
      source_info {
        account_id
        first_name
        last_name
      }
      destination_info {
        account_id
        first_name
        last_name
      }
      swift_code
      beneficiary_bank
      purpose_of_transfer
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
